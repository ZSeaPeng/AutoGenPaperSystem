package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.PaperItem;

public interface PaperItemMapper {
    int deleteByPrimaryKey(Integer paperitemid);

    int insert(PaperItem record);

    int insertSelective(PaperItem record);

    PaperItem selectByPrimaryKey(Integer paperitemid);

    int updateByPrimaryKeySelective(PaperItem record);

    int updateByPrimaryKey(PaperItem record);
}