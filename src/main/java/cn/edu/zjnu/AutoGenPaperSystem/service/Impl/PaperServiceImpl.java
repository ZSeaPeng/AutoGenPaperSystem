package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.PaperMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.model.QuestionsJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.PaperService;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by zseapeng on 2016/11/25.
 */
@Service
public class PaperServiceImpl implements PaperService {
    @Resource
    private PaperMapper paperMapper;
    @Resource
    private QuestionsService questionsServiceImpl;

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
    public List<QuestionsJson> getListQuestions(int paperId) {
        Paper paper = paperMapper.selectByPrimaryKey(paperId);
        String[] qId =paper.getQuestionIds().split(",");
        System.out.println(qId.length);
        List<QuestionsJson> questionss = new ArrayList<>();
        questionss.clear();
        for (String s:qId){
            if (!s.equals("0")){
                //System.out.println("id--》"+s);
                Questions questions = questionsServiceImpl.selectByPrimaryKey(Integer.valueOf(s));
                //System.out.println(questions);
                QuestionsJson questionsJson = new QuestionsJson();
                questionsJson.setId(questions.getQuestionsId());
                questionsJson.setQurl(questions.getQuesPic_URL());
                questionsJson.setAurl(questions.getAnswerPic_URL());
                questionss.add(questionsJson);
            }

        }


        return questionss;
    }
}
