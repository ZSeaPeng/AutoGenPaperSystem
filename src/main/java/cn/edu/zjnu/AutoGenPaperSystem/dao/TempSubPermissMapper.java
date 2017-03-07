package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.TempSubPermiss;

public interface TempSubPermissMapper {
    int deleteByPrimaryKey(Integer tempsubperid);

    int insert(TempSubPermiss record);

    int insertSelective(TempSubPermiss record);

    TempSubPermiss selectByPrimaryKey(Integer tempsubperid);

    int updateByPrimaryKeySelective(TempSubPermiss record);

    int updateByPrimaryKey(TempSubPermiss record);
}