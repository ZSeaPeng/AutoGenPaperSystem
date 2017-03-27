package cn.edu.zjnu.AutoGenPaperSystem.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sgt on 2017/3/23.
 */
public class DataUtil {
    public static Object getNewClass(Object result,Object input){
        try {
            Class clazz=input.getClass();
            Class clazz2=result.getClass();
            //获取本对象的属性
            Field[] fields = clazz.getDeclaredFields();
            Field[] fields2 = clazz2.getDeclaredFields();
            //获取父类的属性
            Field[] superFields = clazz.getSuperclass().getDeclaredFields();
            Field[] superFields2 = clazz2.getSuperclass().getDeclaredFields();
            //父类的属性和自己的属性相加
            Field[] allFields = addFields(superFields, fields);
            Field[] allFields2 = addFields(superFields2, fields2);
            for (Field list:allFields){
                // 获取原来的访问控制权限
                boolean accessFlag = list.isAccessible();
                // 修改访问控制权限
                list.setAccessible(true);
                // 获取在对象f中属性fields[i]对应的对象中的变量
                Object o = list.get(input);
                // 恢复访问控制权限
                list.setAccessible(accessFlag);
                for (Field field : allFields2) {
                    if (field.getName().equals(list.getName())&&o!=null){
//                    String get= String.valueOf(getterMethod.invoke(a));
                        //获得setter方法的方法名
                        String setterMethodName = getSetterMethodName(field.getName());
                        //获得setter方法
                        Method setterMethod = clazz2.getMethod(setterMethodName, field.getType());
                        setterMethod.invoke(result,o);
                    }
                }
            }
            return result;
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        return result;
    }


    //相加两个数组
    private static Field[] addFields(Field[] f1, Field[] f2) {
        List<Field> l = new ArrayList<Field>();
        for (Field f : f1) l.add(f);
        for (Field f : f2) l.add(f);
        return l.toArray(new Field[f1.length + f2.length]);
    }

    //根据属性名获得setter方法的方法名
    private static String getSetterMethodName(String fieldName) {
        String begin = fieldName.substring(0, 1).toUpperCase();
        String end = fieldName.substring(1, fieldName.length());
        String methodName = "set" + begin + end;
        return methodName;
    }
}
