package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.model.QuestionsJson;

import java.util.List;

/**
 * Created by zseapeng on 2016/11/25.
 */
public interface PaperService {
    int insertSelective(Paper record);

    Paper selectByPrimaryKey(Integer paperId);

    List<Paper> selectByUserId(int userid);

    List<QuestionsJson> getListQuestions(int paperId);
}
