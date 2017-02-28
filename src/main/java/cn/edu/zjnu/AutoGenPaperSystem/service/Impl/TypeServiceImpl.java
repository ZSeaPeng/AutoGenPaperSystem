package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.TypesMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Types;
import cn.edu.zjnu.AutoGenPaperSystem.model.TypesJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.TypeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class TypeServiceImpl implements TypeService {

    @Resource
    private TypesMapper typesMapper;

    public int deleteByPrimaryKey(Integer typeId) {
        return 0;
    }

    public int insert(Types record) {
        return 0;
    }

    public int insertSelective(Types record) {
        return typesMapper.insertSelective(record);
    }

    public Types selectByPrimaryKey(Integer typeId) {
        return null;
    }

    public int updateByPrimaryKeySelective(Types record) {
        return 0;
    }

    public int updateByPrimaryKey(Types record) {
        return 0;
    }

    public List selectTypesBySubjectId(Integer subjectId,int gradeId,String subName,String others,String pointId,String t,String d,String c) {
        List<TypesJson> typesJsonList = new ArrayList<TypesJson>();
        List<Types> typesList = typesMapper.selectTypesBySubjectId(subjectId);
        TypesJson typejson = new TypesJson();
        typejson.setId(0);
        typejson.setName("全部");
        typejson.setUrl("/tiku/"+gradeId+"/"+subName+"/point"+pointId+"/t"+
                0+"d"+d+"c"+c);
        if (t.equals("0")){
            typejson.setSelect(true);
        }
        typesJsonList.add(typejson);
        for (Types types:typesList){
            TypesJson json = new TypesJson();
            json.setId(types.getTypeId());
            json.setName(types.getTypeName());
            json.setUrl("/tiku/"+gradeId+"/"+subName+"/point"+pointId+"/t"+
                    types.getTypeId()+"d"+d+"c"+c);
            if (types.getTypeId().toString().equals(t)){
                json.setSelect(true);
            }
            typesJsonList.add(json);
        }

        return typesJsonList;
    }

    @Override
    public Integer selectIdByName(String name,Integer subid) {
        Map map = new HashMap();
        map.put("name",name);
        map.put("subid",subid);
        map.clear();
        Object i = typesMapper.selectIdByName(name,subid);

        return typesMapper.selectIdByName(name,subid);
    }


}
