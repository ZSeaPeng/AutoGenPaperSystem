package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.AdminMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Admin;
import cn.edu.zjnu.AutoGenPaperSystem.service.AdminService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by zseapeng on 2016/11/24.
 */
@Service
public class AdminServiceImpl implements AdminService {
    @Resource
    private AdminMapper adminMapper;

    @Override
    public Admin selectByadminName(String adminName) {
        return adminMapper.selectByadminName(adminName);
    }

    @Override
    public int setMaxquantity(Integer maxQuantity) {

        return adminMapper.setMaxQuantity(maxQuantity);
    }

    @Override
    public int getMaxQuantity() {
        return adminMapper.selectMaxQuantity();
    }


}
