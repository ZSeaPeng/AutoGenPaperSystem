package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.model.SearchAll;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionsMapper {
    int deleteByPrimaryKey(Integer questionsId);

    int insert(Questions record);

    int insertSelective(Questions record);

    Questions selectByPrimaryKey(Integer questionsId);

    int updateByPrimaryKeySelective(Questions record);

    int updateByPrimaryKey(Questions record);


    List<Questions> selectBySearchAll(SearchAll searchAll);

    List<Questions> selectUploadTime();

    List<Questions> selectQuestionByTime(int subjectId, String date);

    Questions selectQuestionByIdList(Integer questionsId);

    List<Questions> selectQuestionArray(int typeId, int pointId, int subjectId);

    List<Questions> selectQuestionListByTypeAndDif(int typeId, int difId);

    Questions selectRandQuestion(Questions record);
}