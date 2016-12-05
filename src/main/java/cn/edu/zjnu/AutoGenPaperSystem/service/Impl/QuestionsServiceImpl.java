package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.DifficultyMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.SubjectMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.UserMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.*;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.util.generation.QuestionBean;
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
    @Resource
    private DifficultyMapper difficultyMapper;
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

    public Map selectBySearchAll(SearchAll searchAll, int nowpage, int userId) {
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
        if (userId != -1) {
            User user = userMapper.selectByPrimaryKey(userId);
            String chose = user.getUserchosen();
            String collection = user.getUsercollection();
            String[] strings = chose.split(",");
            // System.out.println("strings.length---"+strings.length);

            for (String list : strings) {
                Map<String, Object> questionsMap = new HashMap<String, Object>();
                Questions questions = new Questions();
                if (!list.equals("0")) {
                    questions = questionsMapper.selectQuestionByIdList(Integer.parseInt(list));
                    questionsMap.put("id", questions.getQuestionsId());
                    questionsMap.put("type", questions.getTypes().getTypeName());

                    // System.out.println("questionsesMap------"+questionsesMap);
                    chosenList.add(questionsMap);
                }
            }

            String[] collstrings = collection.split(",");

            for (String list : collstrings) {

                collectList.add(list);
            }
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
                }
                else {
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
        if (userId !=-1) {
            User user = userMapper.selectByPrimaryKey(userId);
            String chose = user.getUserchosen();
            String collection = user.getUsercollection();
            String[] strings = chose.split(",");

            for (String list : strings) {
                System.out.println("list----" + list);
                Map<String, Object> questionsMap = new HashMap<String, Object>();
                Questions questions = new Questions();
                if (!list.equals("0")) {

                    questions = questionsMapper.selectQuestionByIdList(Integer.parseInt(list));
                    questionsMap.put("id", questions.getQuestionsId());
                    questionsMap.put("type", questions.getTypes().getTypeName());
                    chosenList.add(questionsMap);
                }
            }

            String[] collstrings = collection.split(",");

            for (String list : collstrings) {
                collectList.add(list);
            }
        }
        questionMap.put("context", questionsJsonList);
        PageInfo pageInfo = new PageInfo(questionsList);
        questionMap.put("pageNum", pageInfo.getPageNum());
        questionMap.put("pages", pageInfo.getPages());
        questionMap.put("userChosen", chosenList);
        questionMap.put("userCollection", collectList);
        return questionMap;
    }

    @Override
    public QuestionBean[] selectQuestionArray(int typeId, String pointIds, int subjectId) {
        int j=0;
        String []pointId=pointIds.split(",");
        Set<Questions> questionsSet=new HashSet<>();
        QuestionBean []questionBeans=new QuestionBean[100];
        for (int i=0;i<pointId.length;i++){
            List<Questions> questions=questionsMapper.selectQuestionArray(typeId, Integer.parseInt(pointId[i]),subjectId);
            questionsSet.addAll(questions);
        }
        for (Questions list:questionsSet){
            Difficulty difficult=difficultyMapper.selectByPrimaryKey(list.getDifficultyId());
            Double dif=(difficult.getLowlimit()+difficult.getUplimit())/2.0;
            QuestionBean questionBean=new QuestionBean();
            questionBean.setDifficulty(dif);
            questionBean.setDifficultId(list.getDifficultyId());
            questionBean.setAnswer(list.getAnswer());
            questionBean.setContent(list.getContent());
            questionBean.setId(list.getQuestionsId());
            questionBean.setCreateTime(list.getUploadTime());
            questionBean.setTypeId(list.getTypeId());
            if (list.getKnowledgeId1()!=0&&list.getKnowledgeId2()==0){
                questionBean.setPointId(list.getKnowledgeId1());
            }
            else if (list.getKnowledgeId2()!=0&&list.getKnowledgeId3()==0){
                questionBean.setPointId(list.getKnowledgeId2());
            }
            else if (list.getKnowledgeId3()!=0&&list.getKnowledgeId4()==0){
                questionBean.setPointId(list.getKnowledgeId3());
            }
            else {
                questionBean.setPointId(list.getKnowledgeId4());
            }
            questionBeans[j]=questionBean;
            j++;
        }
        return questionBeans;
    }

    @Override
    public List<QuestionBean> selectQuestionListByTypeAndDif(QuestionBean questionBean) {
        List<Questions> questionss=questionsMapper.selectQuestionListByTypeAndDif(questionBean.getTypeId(),questionBean.getDifficultId());
        List<QuestionBean> questionBeans=new ArrayList<>();
        for (Questions list:questionss){
            QuestionBean questionBean1=new QuestionBean();
            questionBean1.setDifficulty(questionBean.getDifficulty());
            questionBean1.setDifficultId(list.getDifficultyId());
            questionBean1.setAnswer(list.getAnswer());
            questionBean1.setContent(list.getContent());
            questionBean1.setId(list.getQuestionsId());
            questionBean1.setCreateTime(list.getUploadTime());
            questionBean1.setTypeId(list.getTypeId());
            if (list.getKnowledgeId1()!=0&&list.getKnowledgeId2()==0){
                questionBean1.setPointId(list.getKnowledgeId1());
            }
            else if (list.getKnowledgeId2()!=0&&list.getKnowledgeId3()==0){
                questionBean1.setPointId(list.getKnowledgeId2());
            }
            else if (list.getKnowledgeId3()!=0&&list.getKnowledgeId4()==0){
                questionBean1.setPointId(list.getKnowledgeId3());
            }
            else {
                questionBean1.setPointId(list.getKnowledgeId4());
            }
            questionBeans.add(questionBean1);
        }
        return questionBeans;
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