package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Types;

import java.util.List;

public interface TypesMapper {
    int deleteByPrimaryKey(Integer typeId);

    int insert(Types record);

    int insertSelective(Types record);

    Types selectByPrimaryKey(Integer typeId);

    int updateByPrimaryKeySelective(Types record);

    int updateByPrimaryKey(Types record);

    List<Types> selectTypesBySubjectId(Integer subjectId);
}