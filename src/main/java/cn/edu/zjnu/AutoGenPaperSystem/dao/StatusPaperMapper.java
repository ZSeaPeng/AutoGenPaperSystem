package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.StatusPaper;

public interface StatusPaperMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StatusPaper record);

    int insertSelective(StatusPaper record);

    StatusPaper selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StatusPaper record);

    int updateByPrimaryKey(StatusPaper record);
}