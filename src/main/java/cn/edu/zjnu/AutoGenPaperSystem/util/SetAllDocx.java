package cn.edu.zjnu.AutoGenPaperSystem.util;

import org.docx4j.openpackaging.packages.WordprocessingMLPackage;

import java.io.File;
import java.io.FileInputStream;
import java.util.*;

/**
 * Created by sgt on 2016/12/12.
 */
public class SetAllDocx {

    private MergeDOCX mergeDOCX=new MergeDOCX();
    public void Title(Map paperMap,String temp,String resultPath) throws Exception {
        Set set=paperMap.entrySet();
        WordprocessingMLPackage target =WordprocessingMLPackage.load(new FileInputStream(new File(temp)));
        target.getMainDocumentPart().addStyledParagraphOfText("a8", String.valueOf(paperMap.get("Title")));
        for (Iterator iter = set.iterator(); iter.hasNext();){
            Map.Entry entry = (Map.Entry)iter.next();
            if (entry.getKey()=="Title"){
                continue;
            }
            else if (entry.getKey().equals("xm")||entry.getKey().equals("attent")){
                List tempList=new ArrayList();
                tempList.add(entry.getValue());
                mergeDOCX.mergedocx(target,tempList,false);
            }
            else {
                target.getMainDocumentPart().addStyledParagraphOfText("1", String.valueOf(entry.getKey()));
                mergeDOCX.mergedocx(target,(List<String>) entry.getValue(),true);
            }
        }
        target.save(new File(resultPath));
    }
}
