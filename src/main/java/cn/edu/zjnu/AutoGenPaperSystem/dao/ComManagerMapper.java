package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.ComManager;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;

import java.util.List;

public interface ComManagerMapper {
    int deleteByPrimaryKey(Integer commanagerId);

    int insert(ComManager record);

    int insertSelective(ComManager record);

    ComManager selectByPrimaryKey(Integer commanagerId);

    int updateByPrimaryKeySelective(ComManager record);

    int updateByPrimaryKey(ComManager record);

    List selectAll();

    int updateDeleteById(Integer id);

    String selectUserListById(Integer id);
 }