package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Temporary;

import java.util.List;

/**
 * Created by zseapeng on 2016/11/30.
 */
public interface TemporaryService {
    int deleteByPrimaryKey(Integer temporaryId);

    int insert(Temporary record);

    int insertSelective(Temporary record);

    Temporary selectByPrimaryKey(Integer temporaryId);

    int updateByPrimaryKeySelective(Temporary record);

    int updateByPrimaryKey(Temporary record);

    List selectAll();

    int updateDeleteById(Integer tempUserId);
}
