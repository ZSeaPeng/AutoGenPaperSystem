package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Charaction;

import java.util.List;

/**
 * Created by zseapeng on 2016/9/22.
 */
public interface CharacterService {
    int deleteByPrimaryKey(Integer charactId);

    int insert(Charaction record);

    int insertSelective(Charaction record);

    Charaction selectByPrimaryKey(Integer charactId);

    int updateByPrimaryKeySelective(Charaction record);

    int updateByPrimaryKey(Charaction record);

    int selectIdByName(String name);

    List selectAllCharat(Integer subjectId,int gradeId,String subName,String others,String pointId,String t,String d,String c);
}
