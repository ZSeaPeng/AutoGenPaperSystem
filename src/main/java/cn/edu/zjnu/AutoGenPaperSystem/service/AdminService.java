package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.Admin;

/**
 * Created by zseapeng on 2016/11/24.
 */
public interface AdminService {
    Admin selectByadminName(String adminName);

    int setMaxquantity(Integer maxQuantity);

    int getMaxQuantity();
}
