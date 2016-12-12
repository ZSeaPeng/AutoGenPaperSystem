package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Difficulty;

import java.util.List;

/**
 * Created by zseapeng on 2016/9/22.
 */
public interface DifficultyService {
    int deleteByPrimaryKey(Integer difficultyId);

    int insert(Difficulty record);

    int insertSelective(Difficulty record);

    Difficulty selectByPrimaryKey(Integer difficultyId);

    int updateByPrimaryKeySelective(Difficulty record);

    int updateByPrimaryKey(Difficulty record);

    List selectAllDifficult(Integer subjectId, int gradeId, String subName, String others, String pointId,String t,String d,String c);
}
