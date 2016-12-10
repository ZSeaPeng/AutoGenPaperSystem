package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Knowledge;

import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/9/22.
 */
public interface KnowledgeService {
    int deleteByPrimaryKey(Integer knowledgeId);

    int insert(Knowledge record);

    int insertSelective(Knowledge record);

    Knowledge selectByPrimaryKey(Integer knowledgeId);

    int updateByPrimaryKeySelective(Knowledge record);

    int updateByPrimaryKey(Knowledge record);

    List<Knowledge> selectKnowledgeBySubjectId(Integer subjectId, int gradeID, String subName);

    Map selectKnowledgeBySubjectIds(int id);

    //Map selectFirstKnowledgeBySubjectId(Integer subjectId);
    List selectFirstKnowledgeBySubjectId(Integer subjectId,int grade_id,String others,String subName, String pointId,String t,String d,String c);

    int updateIsDeleteById(Integer knowledgeId);

    Map<String,Integer> selectKnowledgeByName(String name);

    Map<String,Integer> selectKnowledgeById(Integer id);
}