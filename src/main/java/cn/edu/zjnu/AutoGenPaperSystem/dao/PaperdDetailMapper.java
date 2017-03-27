package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.PaperdDetail;

public interface PaperdDetailMapper {
    int deleteByPrimaryKey(Integer paperdetailid);

    int insert(PaperdDetail record);

    int insertSelective(PaperdDetail record);

    PaperdDetail selectByPrimaryKey(Integer paperdetailid);

    int updateByPrimaryKeySelective(PaperdDetail record);

    int updateByPrimaryKey(PaperdDetail record);
}