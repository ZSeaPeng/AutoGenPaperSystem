package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.ComMangSubPermiss;

public interface ComMangSubPermissMapper {
    int deleteByPrimaryKey(Integer commangsubperid);

    int insert(ComMangSubPermiss record);

    int insertSelective(ComMangSubPermiss record);

    ComMangSubPermiss selectByPrimaryKey(Integer commangsubperid);

    int updateByPrimaryKeySelective(ComMangSubPermiss record);

    int updateByPrimaryKey(ComMangSubPermiss record);
}