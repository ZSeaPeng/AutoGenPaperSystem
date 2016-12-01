package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.ComManager;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;

import java.util.List;

/**
 * Created by zseapeng on 2016/12/1.
 */
public interface ComManagerService {
    int deleteByPrimaryKey(Integer commanagerId);

    int insert(ComManager record);

    int insertSelective(ComManager record);

    ComManager selectByPrimaryKey(Integer commanagerId);

    int updateByPrimaryKeySelective(ComManager record);

    int updateByPrimaryKey(ComManager record);

    List selectAll();

    int updateDeleteById(Integer id);

    List selectUserListById(Integer id);

    int updateUserList(User user,Integer comId);
}
