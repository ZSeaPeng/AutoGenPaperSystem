package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.UserSubPermiss;

/**
 * Created by zseapeng on 2017/3/19.
 */
public interface UserSubPermissService {

    int deleteByPrimaryKey(Integer subpermissid);

    int insert(UserSubPermiss record);

    int insertSelective(UserSubPermiss record);

    UserSubPermiss selectByPrimaryKey(Integer subpermissid);

    int updateByPrimaryKeySelective(UserSubPermiss record);

    int updateByPrimaryKey(UserSubPermiss record);

    int updateBySubIdAndUserId(Integer subid,Integer userId);
}
