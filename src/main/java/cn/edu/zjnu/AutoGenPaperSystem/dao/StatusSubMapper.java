package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.StatusSub;

public interface StatusSubMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StatusSub record);

    int insertSelective(StatusSub record);

    StatusSub selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StatusSub record);

    int updateByPrimaryKey(StatusSub record);
}