package cn.edu.zjnu.AutoGenPaperSystem.util;

import org.docx4j.openpackaging.packages.WordprocessingMLPackage;

import java.io.File;
import java.io.FileInputStream;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by sgt on 2016/12/12.
 */
public class SetAllDocx {

    public static void Title(Map paperMap,String temp,String resultPath) throws Exception {
        Set set=paperMap.entrySet();
        WordprocessingMLPackage target =WordprocessingMLPackage.load(new FileInputStream(new File(temp)));
        target.getMainDocumentPart().addStyledParagraphOfText("a8", String.valueOf(paperMap.get("Title")));
        for (Iterator iter = set.iterator(); iter.hasNext();){
            Map.Entry entry = (Map.Entry)iter.next();
            if (entry.getKey()=="Title"){
                continue;
            }
            else {
                target.getMainDocumentPart().addStyledParagraphOfText("1", String.valueOf(entry.getKey()));
                MergeDOCX.mergedocx(target,(List<String>) entry.getValue());
            }
        }
        target.save(new File(resultPath));
    }
}
