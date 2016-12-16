package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Types;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypesMapper {
    int deleteByPrimaryKey(Integer typeId);

    int insert(Types record);

    int insertSelective(Types record);

    Types selectByPrimaryKey(Integer typeId);

    int updateByPrimaryKeySelective(Types record);

    int updateByPrimaryKey(Types record);

    List<Types> selectTypesBySubjectId(Integer subjectId);

    Integer selectIdByName(String name,Integer subid);


}