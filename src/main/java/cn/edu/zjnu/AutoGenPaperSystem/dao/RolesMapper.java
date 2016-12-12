package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Roles;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesMapper {
    int deleteByPrimaryKey(Long rolesId);

    int insert(Roles record);

    int insertSelective(Roles record);

    Roles selectByPrimaryKey(Long rolesId);

    int updateByPrimaryKeySelective(Roles record);

    int updateByPrimaryKey(Roles record);
}