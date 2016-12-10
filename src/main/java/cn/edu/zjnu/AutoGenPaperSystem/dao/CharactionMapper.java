package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Charaction;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CharactionMapper {
    int deleteByPrimaryKey(Integer charactId);

    int insert(Charaction record);

    int insertSelective(Charaction record);

    Charaction selectByPrimaryKey(Integer charactId);

    int updateByPrimaryKeySelective(Charaction record);

    int updateByPrimaryKey(Charaction record);

    List<Charaction> selectAllCharat();

    int selectIdByName(String name);
}