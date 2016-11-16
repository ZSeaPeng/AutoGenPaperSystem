package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Knowledge;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KnowledgeMapper {
    int deleteByPrimaryKey(Integer knowledgeId);

    int insert(Knowledge record);

    int insertSelective(Knowledge record);

    Knowledge selectByPrimaryKey(Integer knowledgeId);

    int updateByPrimaryKeySelective(Knowledge record);

    int updateByPrimaryKey(Knowledge record);

    int updateIsDeleteById(Integer knowledgeId);


    List<Knowledge> selectKnowledgeBySubjectId(Integer subjectId);


    List<Knowledge> selectFirstKnowledgeBySubjectId(Integer subjectId);

    List<Knowledge> selectSecondKnowledgeByKnowId1(Integer knowId1);
}