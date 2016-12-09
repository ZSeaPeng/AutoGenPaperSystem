package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.PaperMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.model.QuestionsJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.PaperService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by zseapeng on 2016/11/25.
 */
@Service
public class PaperServiceImpl implements PaperService {
    @Resource
    private PaperMapper paperMapper;
    @Resource
    private QuestionsMapper questionsMapper;

    @Override
    public int insertSelective(Paper record) {
        record.setGeneratime(new Date());
        return paperMapper.insertSelective(record);
    }

    @Override
    public Paper selectByPrimaryKey(Integer paperId) {
        return paperMapper.selectByPrimaryKey(paperId);
    }

    @Override
    public List<Paper> selectByUserId(int userid) {

        return paperMapper.selectByUserId(userid);
    }

    @Override
    public Map getListQuestions(int paperId) {
        String type = "";
        String subName = "";
        if (type.equals("")) {
            type = "默认类型";
        }
        if (subName.equals("")) {
            subName = "默认学科";
        }
        Map lastMap = new HashMap();
        List<Map> lastList = new ArrayList<Map>();
        lastMap.put("Type", type);
        lastMap.put("subName", subName);
       // String chosenTemp = userMapper.selectUserChosenByUSerId(userId);
        String[] questionIds = paperMapper.selectByPrimaryKey(paperId).getQuestionIds().split(",");
        Set<String> typeSet = new HashSet();
        List<Questions> questionsList = new ArrayList<Questions>();
        for (String qid : questionIds) {
            if (!qid.equals("0")) {
                Questions questions = questionsMapper.selectQuestionByIdList(Integer.valueOf(qid));
                questionsList.add(questions);
            }
        }
        for (String s : questionIds) {
            if (!s.equals("0")) {
                Questions q = questionsMapper.selectQuestionByIdList(Integer.valueOf(s));
                typeSet.add(q.getTypes().getTypeName());
            }
        }
        for (String typeName : typeSet) {
            Map map = new HashMap();
            map.clear();
            map.put("type", typeName);
            List<QuestionsJson> questionsJsonList = new ArrayList<QuestionsJson>();
            questionsJsonList.clear();
            for (Questions q : questionsList) {

                // System.out.println(q.getTypes().getTypeName());
                if (q.getTypes().getTypeName().equals(typeName)) {
                    QuestionsJson questionsJson = new QuestionsJson();
                    questionsJson.setId(q.getQuestionsId());
                    questionsJson.setQurl(q.getQuesPic_URL());
                    questionsJson.setAurl(q.getAnswerPic_URL());
                    questionsJsonList.add(questionsJson);
                }
            }
            map.put("questions", questionsJsonList);
            lastList.add(map);
        }
            //改变顺序
            Iterator iterator = lastList.iterator();
            while (iterator.hasNext()) {
                Map mapTemp = (Map) iterator.next();
                if (mapTemp.get("type").equals("单选题")) {
                    iterator.remove();
                    lastList.add(lastList.size(), mapTemp);
                    break;
                }

            }
            lastMap.put("questions", lastList);

            return lastMap;
    }
}
