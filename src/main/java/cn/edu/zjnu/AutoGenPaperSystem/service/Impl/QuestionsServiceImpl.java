package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.SubjectMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.UserMapper;
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
    @Resource
    private UserMapper userMapper;

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

    public Map selectBySearchAll(SearchAll searchAll, int nowpage, Integer userId) {
        PageHelper.startPage(nowpage, 5);
        List<Questions> questionses = questionsMapper.selectBySearchAll(searchAll);
        List<QuestionsJson> questionsJsons = new ArrayList<QuestionsJson>();
        Map<String, Object> questionsesMap = new HashMap<String, Object>();
        for (Questions list : questionses) {
            QuestionsJson questionsJson = new QuestionsJson();
            questionsJson.setId(list.getQuestionsId());
            questionsJson.setQurl(list.getQuesPic_URL());
            questionsJson.setAurl(list.getAnswerPic_URL());
            questionsJsons.add(questionsJson);
        }
        List chosenList = new ArrayList();
        List collectList = new ArrayList();
        User user = userMapper.selectByPrimaryKey(userId);
        String chose = user.getUserchosen();
        String collection = user.getUsercollection();
        String[] strings = chose.split(",");
        String[] collstrings = collection.split(",");
        for (String list : strings) {
            Map<String, Object> questionsMap = new HashMap<String, Object>();
            Questions questions = questionsMapper.selectQuestionByIdList(Integer.parseInt(list));
            questionsMap.put("id", questions.getQuestionsId());
            questionsMap.put("type", questions.getTypes().getTypeName());
            chosenList.add(questionsMap);
        }
        for (String list : collstrings) {
            collectList.add(list);
        }
        questionsesMap.put("context", questionsJsons);
        PageInfo pageInfo = new PageInfo(questionses);
        questionsesMap.put("pageNum", pageInfo.getPageNum());
        questionsesMap.put("pages", pageInfo.getPages());
        questionsesMap.put("userChosen", chosenList);
        questionsesMap.put("userCollection", collectList);
        return questionsesMap;
    }

    @Override
    public List selectUploadTime() {
        List<Questions> questionses = questionsMapper.selectUploadTime();
        Subject subject;
        List<UpdateInfoJson> updateInfoJsonList = new ArrayList<UpdateInfoJson>();
        int i = 0, p = 0;
        int year = 0, month = 0, date = 0;
        int[] s = new int[500];
        for (Questions list : questionses) {
            UpdateInfoJson updateInfoJson = new UpdateInfoJson();
            if (year != list.getUploadTime().getYear() || month != list.getUploadTime().getMonth() || date != list.getUploadTime().getDate()) {
                year = list.getUploadTime().getYear();
                month = list.getUploadTime().getMonth();
                date = list.getUploadTime().getDate();
                i++;
                if (i <= 3) {
                    int j = 0;
                    s[j] = list.getSubjectId();
                    j++;
                    p = j;
                    subject = subjectMapper.selectByPrimaryKey(list.getSubjectId());
                    updateInfoJson.setSub(subject.getSubjectName());
                    updateInfoJson.setDate(list.getUploadTime().toString());
                    try {
                        int y = year + 1900, m = month + 1;
                        updateInfoJson.setUrl("/updateinfo/" + y + "" + m + "" + list.getUploadTime().getDate() + "/" + PinyinHelper.convertToPinyinString(subject.getSubjectName(), "", PinyinFormat.WITHOUT_TONE) + subject.getSubjectId());
                    } catch (PinyinException e) {
                        e.printStackTrace();
                    }
                    updateInfoJsonList.add(updateInfoJson);
                } else {
                    break;
                }
            } else {
                Boolean flag = true;
                for (int k = 0; k < 500; k++) {
                    if (s[k] == list.getSubjectId()) {
                        flag = false;
                    }
                }
                if (flag == true) {
                    s[p] = list.getSubjectId();
                    p++;
                    subject = subjectMapper.selectByPrimaryKey(list.getSubjectId());
                    updateInfoJson.setSub(subject.getSubjectName());
                    updateInfoJson.setDate(list.getUploadTime().toString());
                    try {
                        int y = year + 1900, m = month + 1;
                        updateInfoJson.setUrl("/updateinfo/" + y + "" + m + "" + list.getUploadTime().getDate() + "/" + PinyinHelper.convertToPinyinString(subject.getSubjectName(), "", PinyinFormat.WITHOUT_TONE) + subject.getSubjectId());
                    } catch (PinyinException e) {
                        e.printStackTrace();
                    }
                    updateInfoJsonList.add(updateInfoJson);
                } else {
                    continue;
                }
            }

        }
        return updateInfoJsonList;
    }

    @Override
    public Map selectQuestionByTime(int subjectId, String date, int nowpage, Integer userId) {
        PageHelper.startPage(nowpage, 5);
        List<Questions> questionsList = questionsMapper.selectQuestionByTime(subjectId, date);
        List<QuestionsJson> questionsJsonList = new ArrayList<QuestionsJson>();
        Map<String, Object> questionMap = new HashMap<String, Object>();
        for (Questions list : questionsList) {
            QuestionsJson questionsJson = new QuestionsJson();
            questionsJson.setId(list.getQuestionsId());
            questionsJson.setQurl(list.getQuesPic_URL());
            questionsJson.setAurl(list.getAnswerPic_URL());
            questionsJsonList.add(questionsJson);
        }
        List chosenList = new ArrayList();
        List collectList = new ArrayList();
        User user = userMapper.selectByPrimaryKey(userId);
        String chose = user.getUserchosen();
        String collection = user.getUsercollection();
        String[] strings = chose.split(",");
        String[] collstrings = collection.split(",");
        for (String list : strings) {
            Map<String, Object> questionsMap = new HashMap<String, Object>();
            Questions questions = new Questions();
            questions = questionsMapper.selectQuestionByIdList(Integer.parseInt(list));
            questionsMap.put("id", questions.getQuestionsId());
            questionsMap.put("type", questions.getTypes().getTypeName());
            chosenList.add(questionsMap);
        }
        for (String list : collstrings) {
            collectList.add(list);
        }
        questionMap.put("context", questionsJsonList);
        PageInfo pageInfo = new PageInfo(questionsList);
        questionMap.put("pageNum", pageInfo.getPageNum());
        questionMap.put("pages", pageInfo.getPages());
        questionMap.put("userChosen", chosenList);
        questionMap.put("userCollection", collectList);
        return questionMap;
    }

//    @Override
//    public Map selectQuestionByIdList(Integer questionsId) {
//        Map<String,Object> questionsMap=new HashMap<String, Object>();
//        Questions questions=new Questions();
//        questions= questionsMapper.selectQuestionByIdList(questionsId);
//        questionsMap.put("id:",questions.getQuestionsId());
//        questionsMap.put("type:",questions.getTypes().getTypeName());
//        return questionsMap;
//    }


}