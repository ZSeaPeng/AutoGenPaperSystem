package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Types;

import java.util.List;

/**
 * Created by zseapeng on 2016/9/22.
 */
public interface TypeService {
    int deleteByPrimaryKey(Integer typeId);

    int insert(Types record);

    int insertSelective(Types record);

    Types selectByPrimaryKey(Integer typeId);

    int updateByPrimaryKeySelective(Types record);

    int updateByPrimaryKey(Types record);

    List selectTypesBySubjectId(Integer subjectId, int gradeId, String subName, String others, String pointId, String t, String d, String c);

    Integer selectIdByName(String name, Integer subid);
}
