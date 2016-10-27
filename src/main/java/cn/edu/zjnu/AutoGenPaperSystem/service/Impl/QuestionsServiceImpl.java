package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.SubjectMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.*;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.stuxuhai.jpinyin.PinyinException;
import com.github.stuxuhai.jpinyin.PinyinFormat;
import com.github.stuxuhai.jpinyin.PinyinHelper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class QuestionsServiceImpl implements QuestionsService {

    @Resource
    private QuestionsMapper questionsMapper;
    @Resource
    private SubjectMapper subjectMapper;

    public int deleteByPrimaryKey(Integer questionsId) {
        return 0;
    }

    public int insert(Questions record) {
        return 0;
    }

    public int insertSelective(Questions record) {
        return 0;
    }

    public Questions selectByPrimaryKey(Integer questionsId) {
        return null;
    }

    public int updateByPrimaryKeySelective(Questions record) {
        return 0;
    }

    public int updateByPrimaryKey(Questions record) {
        return 0;
    }

    public Map selectBySearchAll(SearchAll searchAll,int nowpage) {
        PageHelper.startPage(nowpage,5);
        List<Questions> questionses=questionsMapper.selectBySearchAll(searchAll);
        List<QuestionsJson> questionsJsons = new ArrayList<QuestionsJson>();
        Map<String,Object> questionsesMap=new HashMap<String, Object>();
        for(Questions list:questionses) {
            QuestionsJson questionsJson=new QuestionsJson();
            questionsJson.setId(list.getQuestionsId());
            questionsJson.setContext(list.getContent());
            questionsJson.setAnswer(list.getAnswer());
            questionsJson.setQurl(list.getQuesPic_URL());
            questionsJson.setAurl(list.getAnswerPic_URL());
            questionsJsons.add(questionsJson);
        }
        questionsesMap.put("context",questionsJsons);
        PageInfo pageInfo=new PageInfo(questionses);
        questionsesMap.put("pageNum",pageInfo.getPageNum());
        questionsesMap.put("pages",pageInfo.getPages());
        return questionsesMap;
    }

    @Override
    public List selectUploadTime() {
        List<Questions> questionses=questionsMapper.selectUploadTime();
        Subject subject;
        List<UpdateInfoJson> updateInfoJsonList = new ArrayList<UpdateInfoJson>();
        int i=0;
        int year=0,month=0,date=0;
//        System.out.println(questionses);
//        Date date=new Date();
        for (Questions list:questionses){
            int []s=new int[500];
            UpdateInfoJson updateInfoJson=new UpdateInfoJson();
            if (year!=list.getUploadTime().getYear()||month!=list.getUploadTime().getMonth()||date!=list.getUploadTime().getDate()){
                year=list.getUploadTime().getYear();
                month=list.getUploadTime().getMonth();
                date=list.getUploadTime().getDate();
                i++;
                if(i<=3){
//                    System.out.println(list.getUploadTime().getDate());
                    int j=0;
                    s[j]=list.getSubjectId();
                    j++;
                    subject=subjectMapper.selectByPrimaryKey(list.getSubjectId());
                    updateInfoJson.setSub(subject.getSubjectName());
                    updateInfoJson.setDate(list.getUploadTime().toString());
                    try {
                        updateInfoJson.setUrl("/updateinfo/" + list.getUploadTime().getDate()+"/"+ PinyinHelper.convertToPinyinString(subject.getSubjectName(),"", PinyinFormat.WITHOUT_TONE));
                    } catch (PinyinException e) {
                        e.printStackTrace();
                    }
                    updateInfoJsonList.add(updateInfoJson);
                }
                else {
                    break;
                }
            }
            else {
                for (int k:s){
                    if (k==list.getSubjectId()){
                        continue;
                    }
                }
//                System.out.println(list.getUploadTime().getDate());
                subject=subjectMapper.selectByPrimaryKey(list.getSubjectId());
                updateInfoJson.setSub(subject.getSubjectName());
                updateInfoJson.setDate(list.getUploadTime().toString());
                try {
                    updateInfoJson.setUrl("/updateinfo/" + list.getUploadTime().getDate()+"/"+PinyinHelper.convertToPinyinString(subject.getSubjectName(),"", PinyinFormat.WITHOUT_TONE));
                } catch (PinyinException e) {
                    e.printStackTrace();
                }
                updateInfoJsonList.add(updateInfoJson);
            }

        }
        return updateInfoJsonList;
    }

}
