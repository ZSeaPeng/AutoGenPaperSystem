package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Grade;

import java.util.List;

/**
 * Created by zseapeng on 2016/9/22.
 */
public interface GradeService {
    int deleteByPrimaryKey(Integer cradeId);

    int insert(Grade record);

    int insertSelective(Grade record);

    Grade selectByPrimaryKey(Integer cradeId);

    int updateByPrimaryKeySelective(Grade record);

    int updateByPrimaryKey(Grade record);

    List<Grade> selectAllGrade();
}
