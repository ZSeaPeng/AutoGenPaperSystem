package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Difficulty;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DifficultyMapper {
    int deleteByPrimaryKey(Integer difficultyId);

    int insert(Difficulty record);

    int insertSelective(Difficulty record);

    Difficulty selectByPrimaryKey(Integer difficultyId);

    int updateByPrimaryKeySelective(Difficulty record);

    int updateByPrimaryKey(Difficulty record);

    List<Difficulty> selectAllDifficult();
}