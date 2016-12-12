package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Temporary;

import java.util.List;

public interface TemporaryMapper {
    int deleteByPrimaryKey(Integer temporaryId);

    int insert(Temporary record);

    int insertSelective(Temporary record);

    Temporary selectByPrimaryKey(Integer temporaryId);

    int updateByPrimaryKeySelective(Temporary record);

    int updateByPrimaryKey(Temporary record);

    List selectAll();

    int updateDeleteById(Integer tempId);
}