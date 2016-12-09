package cn.edu.zjnu.AutoGenPaperSystem.util;

import org.apache.commons.io.IOUtils;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.xmlbeans.XmlOptions;
import org.docx4j.jaxb.Context;
import org.docx4j.openpackaging.contenttype.ContentType;
import org.docx4j.openpackaging.io.SaveToZipFile;
import org.docx4j.openpackaging.packages.WordprocessingMLPackage;
import org.docx4j.openpackaging.parts.PartName;
import org.docx4j.openpackaging.parts.WordprocessingML.AlternativeFormatInputPart;
import org.docx4j.openpackaging.parts.WordprocessingML.MainDocumentPart;
import org.docx4j.relationships.Relationship;
import org.docx4j.wml.CTAltChunk;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTBody;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sgt on 2016/12/7.
 */
public class MergeDOCX {
    public void merge(List<String> path, String resultPath) throws Exception {
        OutputStream dest=new FileOutputStream(resultPath);
        List<CTBody> srcBodyList=new ArrayList<>();
        List<XWPFDocument> documents=new ArrayList<>();
        CTBody []srcBodies=new CTBody[path.size()];
        for (String list:path){
            InputStream src=new FileInputStream(list);
            OPCPackage srcPackage = OPCPackage.open(src);
            XWPFDocument srcDocument = new XWPFDocument(srcPackage);
            documents.add(srcDocument);
            CTBody srcBody = srcDocument.getDocument().getBody();
            srcBodyList.add(srcBody);
        }
        srcBodies=srcBodyList.toArray(new CTBody[srcBodyList.size()]);
        appendBody(srcBodies);
        documents.get(0).write(dest);
    }

    private static void appendBody(CTBody []src) throws Exception {
        String prefix = src[0].xmlText().substring(0,src[0].xmlText().indexOf(">")+1);
        String sufix=src[0].xmlText().substring( src[0].xmlText().lastIndexOf("<"));
        String mainPart="";
        for (int i=0;i<src.length;i++){
            int j=i+1;
            String append=src[i].xmlText();
            String tempPart=append.substring(append.indexOf(">")+1,append.lastIndexOf("<"));
            String addPart=tempPart.substring(0,tempPart.indexOf(">")+1)+
                    "<w:pPr><w:jc w:val=\"left\"/><w:rPr><w:rFonts w:hint=\"eastAsia\"/></w:rPr></w:pPr><w:r><w:rPr><w:rFonts w:hint=\"eastAsia\"/></w:rPr><w:t>"+j+".</w:t></w:r><w:bookmarkStart w:id=\"0\" w:name=\"_GoBack\"/><w:bookmarkEnd w:id=\"0\"/>"
                    +tempPart.substring(tempPart.indexOf(">")+1,tempPart.lastIndexOf(">")+1);
            mainPart=mainPart+addPart;
        }
        CTBody makeBody = CTBody.Factory.parse(prefix+mainPart+sufix);
        src[0].set(makeBody);
    }


    private static long chunk = 0;
    private static final String CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    public void mergedocx(List<String> path, String resultPath) throws Exception {
//        InputStream s1=new FileInputStream("d:/test/试题模板.docx");
//        InputStream s2=new FileInputStream("d:\\test\\试题模板改测.docx");
        List<byte[]> byteList=new ArrayList<>();
        OutputStream os=new FileOutputStream(resultPath);
        for (int i=1;i<path.size();i++){
            InputStream src=new FileInputStream(path.get(i));
            byteList.add(IOUtils.toByteArray(src));
        }
        WordprocessingMLPackage target = WordprocessingMLPackage.load(new FileInputStream(path.get(0)));
        insertDocx(target.getMainDocumentPart(), byteList);
        SaveToZipFile saver = new SaveToZipFile(target);
        saver.save(os);
    }
    private static void insertDocx(MainDocumentPart main, List<byte[]> bytes) throws Exception {
        for (byte[] list:bytes){
            AlternativeFormatInputPart afiPart = new AlternativeFormatInputPart(new PartName("/part" + (chunk++) + ".docx"));
            afiPart.setContentType(new ContentType(CONTENT_TYPE));
            afiPart.setBinaryData(list);
            Relationship altChunkRel = main.addTargetPart(afiPart);
            CTAltChunk chunk = Context.getWmlObjectFactory().createCTAltChunk();
            chunk.setId(altChunkRel.getId());
            main.addObject(chunk);
        }
    }

}
