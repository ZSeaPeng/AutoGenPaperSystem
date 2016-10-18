package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.model.QuestionsJson;
import cn.edu.zjnu.AutoGenPaperSystem.model.SearchAll;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class QuestionsServiceImpl implements QuestionsService {

    @Resource
    private QuestionsMapper questionsMapper;

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
            questionsJsons.add(questionsJson);
        }
        questionsesMap.put("context",questionsJsons);
        PageInfo pageInfo=new PageInfo(questionses);
        questionsesMap.put("pageNum",pageInfo.getPageNum());
        questionsesMap.put("pages",pageInfo.getPages());
        return questionsesMap;
    }
}
