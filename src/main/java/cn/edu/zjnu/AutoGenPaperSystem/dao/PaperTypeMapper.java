package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.PaperType;

public interface PaperTypeMapper {
    int deleteByPrimaryKey(Integer papertypeid);

    int insert(PaperType record);

    int insertSelective(PaperType record);

    PaperType selectByPrimaryKey(Integer papertypeid);

    int updateByPrimaryKeySelective(PaperType record);

    int updateByPrimaryKey(PaperType record);
}