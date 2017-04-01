package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.*;
import cn.edu.zjnu.AutoGenPaperSystem.model.*;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import cn.edu.zjnu.AutoGenPaperSystem.util.DataUtil;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by sgt on 2016/11/5.
 */
@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;
    @Resource
    private QuestionsMapper questionsMapper;
    @Resource
    private PaperMapper paperMapper;
    @Resource
    private UserSubPermissMapper userSubPermissMapper;
    @Resource
    private SubjectMapper subjectMapper;

    @Override
    public int deleteByPrimaryKey(Integer userId) {
        return userMapper.deleteByPrimaryKey(userId);
    }

    @Override
    public int insert(User record) {
        return 0;
    }

    @Override
    public int insertSelective(User record) {
        return userMapper.insertSelective(record);
    }

    @Override
    public User selectByPrimaryKey(Integer userId) {

        return userMapper.selectByPrimaryKey(userId);
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        System.out.println("record.getUserpassword()--->" + record.getUserpassword());
        if (record.getUserpassword() != null) {
            record.setUserpassword(String.valueOf(new Md5Hash(record.getUserpassword(), record.getUserpassword())));
        }

        if (record.getAdd().size() != 0) {
            List addChange = record.getAdd();
            String subjectCan = userMapper.selectSubjectCanByUserId(record.getUserId());
            for (Object add : addChange) {
                subjectCan = subjectCan + "," + String.valueOf(add);
            }
            record.setSubjectcan(subjectCan);
        }
        record.setDownloadable(null);
        return userMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(User record) {
        return 0;
    }

    @Override
    public Map updateByUserId(String chosen, int userId, int k) {
        //System.out.println("userId=========" + userId);
        User user = userMapper.selectByPrimaryKey(userId);
        String[] quesId = user.getUserchosen().split(",");
        String change = "";
        int i = 0;
        Boolean flag = false;
        for (String list : quesId) {
            if (list.equals(chosen)) {
                flag = true;
                continue;
            }
            change = change + list + ",";
        }
        if (flag == false) {
            change = change + chosen;
        } else {
            change = change.substring(0, change.length() - 1);
        }
        i = userMapper.updateByUserId(change, userId);
        Map<String, Object> questionsMap = new HashMap<String, Object>();
        if (i > 0) {
            Questions questions = questionsMapper.selectQuestionByIdList(Integer.parseInt(chosen));

            questionsMap.put("id", questions.getQuestionsId());
            questionsMap.put("type", questions.getTypes().getTypeName());
            questionsMap.put("k", k);
        } else {
            questionsMap.put("Error", "更新失败");
        }
        return questionsMap;
    }

    @Override
    public Map updateCollectByUserId(String collect, int userId, int k) {
        User user = userMapper.selectByPrimaryKey(userId);
        String[] quesId = user.getUsercollection().split(",");
        String change = "";
        int i = 0;
        Boolean flag = false;
        for (String list : quesId) {
            if (list.equals(collect)) {
                flag = true;
                continue;
            }
            change = change + list + ",";
        }
        if (flag == false) {
            change = change + collect;
        } else {
            change = change.substring(0, change.length() - 1);
        }
        i = userMapper.updateCollectByUserId(change, userId);
        Map questionmap = new HashMap();
        questionmap.put("id", collect);
        questionmap.put("k", k);
        return questionmap;
    }

    @Override
    public int allremove(int userid) {
        //User user = userMapper.selectByPrimaryKey(userid);
        int i = userMapper.updateByUserId("0", userid);
        return i;
    }

    @Override
    public User selectByUserName(String userName) {
        return userMapper.selectUserByUserName(userName);
    }

    @Override
    public List<User> selestAllUsers() {

        return userMapper.selectAllUsers();
    }

    @Override
    public int updateBySubIdAndUserId(String subId, int userId) {
        //String subjectCan = userMapper.selectSubjectCanByUserId(userId);
        //String[] quesId = subjectCan.split(",");
        ////   return 0;
        //String change = "";
        //int i = 0;
        //Boolean flag = false;
        //for (String list : quesId) {
        //    if (list.equals(subId)) {
        //        flag = true;
        //        continue;
        //    }
        //    change = change + list + ",";
        //}
        //if (flag == false) {
        //    change = change + subId;
        //} else {
        //    change = change.substring(0, change.length() - 1);
        //}
        //i = userMapper.updateSubjectCanByUserId(userId, change);

        return userSubPermissMapper.updateBySubIdAndUserId(Integer.valueOf(subId), userId);
    }

    @Override
    public String selectSubjectCanByUserId(int userId) {
// TODO: 2016/11/30
        /**
         *
         */
        String subCan = userMapper.selectSubjectCanByUserId(userId);


        return null;
    }

    @Override
    public int updateIsDeleteByUserId(Integer userid) {
        return userMapper.updateIsDeleteByUserId(userid);
    }

    @Override
    public User selectUserByUserName(String userName) {
        return userMapper.selectUserByUserName(userName);
    }

    @Override
    public Map selectUserChosenByUSerId(int userId, String type, String subName) {
        int subid = 0;
        if (type.equals("")) {
            type = "默认类型";
        }
        if (subName.equals("")) {
            subName = "默认学科";
        }
        Map lastMap = new HashMap();
        List<Map> lastList = new ArrayList<Map>();
        lastMap.put("Type", type);
        String chosenTemp = userMapper.selectUserChosenByUSerId(userId);
        String[] questionIds = chosenTemp.split(",");
        Set<String> typeSet = new HashSet();
        Set<Integer> subjectidSet = new HashSet<>();
        List<Questions> questionsList = new ArrayList<Questions>();
        for (String qid : questionIds) {
            if (!qid.equals("0")) {
                Questions questions = questionsMapper.selectQuestionByIdList(Integer.valueOf(qid));
                subjectidSet.add(questions.getSubjectId());
                questionsList.add(questions);
                typeSet.add(questions.getTypes().getTypeName());
            }
        }
        if (subjectidSet.size() == 1) {
            for (Integer id : subjectidSet) {
                System.out.println(id);
                subid = id;
                subName = subjectMapper.selectByPrimaryKey(id).getSubjectName();
            }

        } else if (subjectidSet.size() > 1) {
            lastMap.put("Error", "有不同学科的题目混合在里面！");
        }
        lastMap.put("subName", subName);
        lastMap.put("subid", subid);
//        for (String s : questionIds) {
//            if (!s.equals("0")) {
//                Questions q = questionsMapper.selectQuestionByIdList(Integer.valueOf(s));
//                typeSet.add(q.getTypes().getTypeName());
//            }
//        }
        for (String typeName : typeSet) {
            Map map = new HashMap();
            map.clear();
            map.put("type", typeName);
            List<QuestionsJson> questionsJsonList = new ArrayList<QuestionsJson>();
            questionsJsonList.clear();
            for (Questions q : questionsList) {
                if (q.getTypes().getTypeName().equals(typeName)) {
                    QuestionsJson questionsJson = new QuestionsJson();
                    questionsJson.setId(q.getQuestionsId());
                    questionsJson.setQurl("papersystem01.oss-cn-hangzhou.aliyuncs.com/"+q.getQuesPic_URL());
                    questionsJson.setAurl("papersystem01.oss-cn-hangzhou.aliyuncs.com/"+q.getAnswerPic_URL());
                    questionsJsonList.add(questionsJson);
                }
            }
            map.put("questions", questionsJsonList);
            map.put("score", "0");
            lastList.add(map);
        }

        //改变顺序
        Iterator iterator = lastList.iterator();
        while (iterator.hasNext()) {
            Map mapTemp = (Map) iterator.next();
            if (mapTemp.get("type").equals("单选题")) {
                iterator.remove();
                lastList.add(lastList.size(), mapTemp);
                break;
            }

        }
        lastMap.put("questions", lastList);
        lastMap.put("qurl", "");
        lastMap.put("aurl", "");

        return lastMap;
    }

    @Override
    public List<QuestionsJson> selectColleltionByUserId(int userId) {
        String collectionTemp = userMapper.selectColleltionByUserId(userId);
        String[] quesId = collectionTemp.split(",");
        List<QuestionsJson> collectionList = new ArrayList();
        collectionList.clear();
        for (String s : quesId) {
            if (!s.equals("0")) {
                Questions questions = questionsMapper.selectByPrimaryKey(Integer.valueOf(s));
                QuestionsJson questionsJson = new QuestionsJson();
                questionsJson.setId(questions.getQuestionsId());
                questionsJson.setAurl(questions.getAnswerPic_URL());
                questionsJson.setQurl(questions.getQuesPic_URL());
                collectionList.add(questionsJson);
            }
        }
        return collectionList;
    }

    @Override
    public UserJson selectShow(int userId) {
        User user = userMapper.selectByPrimaryKey(userId);
        //将查询到的数据导入相应json
        UserJson userJson=new UserJson();
        userJson= (UserJson) DataUtil.getNewClass(userJson,user);
        //json中添加允许查询的试卷数，已经组成的试卷数
        List<UserSubPermiss> userSubPermiss=userSubPermissMapper.selectListByUseridKey(userId);
        List allows=new ArrayList();
        List<Integer> dos=new ArrayList<>();
        for (UserSubPermiss list:userSubPermiss){
            allows.add(list.getAllowpaper());
            dos.add(list.getDopaper());
        }
        userJson.setAllowpaper(allows);
        userJson.setDopaper(dos);
        //json加入历史查询到的试卷
        List<Paper> paperList=paperMapper.selectByUserId(userId);
        List<PaperJson> paperJsonList = new ArrayList<>();
        paperJsonList.clear();
        for (Paper paper:paperList){
            PaperJson paperJson = new PaperJson();
            paperJson.setHistoryPaperUrl(paper.getPaperurl());
            paperJson.setHistoryAnswerUrl(paper.getAnswerurl());
            paperJson.setPaperId(paper.getPaperid());
            paperJson.setPaperName(paper.getPapername());
            paperJson.setPaperDate(paper.getGeneratime());
            paperJsonList.add(paperJson);
        }
        userJson.setHistoryPaper(paperJsonList);

//        int collectionnum = user.getUsercollection().split(",").length - 1;
//        user.setUsercollection(String.valueOf(collectionnum));
//        List<Paper> paperList = paperMapper.selectByUserId(userId);
//        //if (paperList.size() != 0) {
//        List<PaperJson> paperJsonList = new ArrayList<>();
//        paperJsonList.clear();
//        for (Paper p : paperList) {
//            PaperJson paperJson = new PaperJson();
//            paperJson.setHistoryPaperUrl("/testpaper?paper=" + p.getPaperId());
//            paperJson.setPaperName(p.getPaperName());
//            paperJson.setPaperId(p.getPaperId());
//            paperJson.setPaperDate(p.getGeneratime());
//            paperJsonList.add(paperJson);
//
//        }
//        user.setHistoryPaper(paperJsonList);
        // }
        return userJson;
    }

    @Override
    public int deleteUserChonce(int userId) {
        return userMapper.updateByUserId("0", userId);
    }
}



