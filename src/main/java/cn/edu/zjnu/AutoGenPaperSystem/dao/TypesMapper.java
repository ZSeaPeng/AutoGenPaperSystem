package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Types;

public interface TypesMapper {
    int deleteByPrimaryKey(Integer typeId);

    int insert(Types record);

    int insertSelective(Types record);

    Types selectByPrimaryKey(Integer typeId);

    int updateByPrimaryKeySelective(Types record);

    int updateByPrimaryKey(Types record);
}