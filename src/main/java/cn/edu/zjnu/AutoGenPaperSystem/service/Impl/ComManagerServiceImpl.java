package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.ComManagerMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.UserMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.ComManager;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.ComManagerService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zseapeng on 2016/12/1.
 */
@Service
public class ComManagerServiceImpl implements ComManagerService {

    @Resource
    private ComManagerMapper comManagerMapper;
    @Resource
    private UserMapper userMapper;

    @Override
    public int deleteByPrimaryKey(Integer commanagerId) {
        return 0;
    }

    @Override
    public int insert(ComManager record) {
        return 0;
    }

    @Override
    public int insertSelective(ComManager record) {
        return comManagerMapper.insertSelective(record);
    }

    @Override
    public ComManager selectByPrimaryKey(Integer commanagerId) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(ComManager record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(ComManager record) {
        return 0;
    }

    @Override
    public List selectAll() {
        return comManagerMapper.selectAll();
    }

    @Override
    public int updateDeleteById(Integer id) {
        return comManagerMapper.updateDeleteById(id);
    }

    @Override
    public List selectUserListById(Integer id) {
        String userList = comManagerMapper.selectUserListById(id);
        List usersList = new ArrayList();
        usersList.clear();
        String[] users = userList.split(",");
        for (String s : users) {
            if (!s.equals("0")) {
                System.out.println("s---"+s);
                User user = userMapper.selectByPrimaryKey(Integer.valueOf(s));
                System.out.println("user---"+user);
                usersList.add(user);
            }
        }
        return usersList;
    }

}
