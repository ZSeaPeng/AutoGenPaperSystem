package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;

import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/25.
 */
public interface PaperService {
    int insertSelective(Paper record);

    Paper selectByPrimaryKey(Integer paperId);

    List<Paper> selectByUserId(int userid);

    Map getListQuestions(int paperId);


}
