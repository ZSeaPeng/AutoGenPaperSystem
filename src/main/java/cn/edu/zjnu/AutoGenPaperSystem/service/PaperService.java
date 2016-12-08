package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;

/**
 * Created by zseapeng on 2016/11/25.
 */
public interface PaperService {
    int insertSelective(Paper record);

    Paper selectByPrimaryKey(Integer paperId);
}
