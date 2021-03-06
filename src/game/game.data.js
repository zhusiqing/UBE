// 常规字符串
const EVENT_LIST = ['活跃的怪物','短暂预视','好运气','恶劣天气']; // 各个事件的列表
const EVENT_DESCR =  ['本区域所遭遇怪物等级+2','激活本区域装置时+1能量',
					'本区域的探索结果可最多-10','当失去一天时,额外失去一天']; // 对应EVENT_LIST各个事件的说明列表;

const WILDERNESS_NAME = ['炎熔噬窟','厉岩峡谷','荒废古城','无限原野','苍髯群峰','扼根沼泽']; // 冒险区域名
const COMPONENT_NAME = ['铅','硅土','蜡','石英','银','树胶']; // 组件
const CONSTRUCT_NAME = ['水晶电池','黄金罗盘','全知镜片','密闭魔镜','平衡印章','虚空之门']; // 装置
const TREASURE_NAME = ['冰晶胸甲','雷神手镯','月光荧丝','亚龙之鳞','熔岩碎片','远古记事']; // 宝物
const TOOL_NAME = ['聚焦护符','麻痹魔杖','探索手杖']; // 工具

const ZONE_COLOR = ['#2db7f5','#19be6b','#ff9900','#ed4014','#ba55d3','#515a6e']; // 各个区域的代表色 与 BADGE_COLOR_CLASS 依赖
const BADGE_COLOR_CLASS = ['lightblue-badge-alone','green-badge-alone','orange-badge-alone', // 依赖于区域色的自定义Badge色
					'red-badge-alone','purple-badge-alone','darkgray-badge-alone',];

const CONSTRUCT_DETAIL = ['消耗任意3个组件,为一个工具充能(仅能用一次)','与精神类怪物对战时所有骰子+1',
							'在厉岩峡谷与扼根沼泽探索结果最多可-10','在苍髯群峰与炎熔噬窟探索结果最多可-10',
							'取消所有地区的事件(仅能用一次)','昏迷后的恢复时间缩减为4天'];// 依赖于 CONSTRUCT_NAME 的顺序
const TREASURE_DETAIL = ['所有怪物攻击范围-1','每度过一天, 上帝之手+1能量','可以无视遭遇战',
			'每度过一天便+1点生命','对所有怪物的命中范围+1','可以自动完成装置连接, 连接值为1']; // 依赖于 TREASURE_NAME 的顺序
const TOOL_DETAIL = ['启动装置时+2能量','战斗时对所有骰子+2','探索时探索结果最多-100']; // // 依赖于 TOOL_NAME 的顺序
const WHITESPACE_i18n = "&#12288;";// 中文全角空格 

const CONNECT_MAP = {
	'铅':[CONSTRUCT_NAME[0],CONSTRUCT_NAME[1]],
	'硅土':[CONSTRUCT_NAME[3],CONSTRUCT_NAME[4]],
	'蜡':[CONSTRUCT_NAME[3],CONSTRUCT_NAME[5]],
	'石英':[CONSTRUCT_NAME[4],CONSTRUCT_NAME[1]],
	'银':[CONSTRUCT_NAME[2],CONSTRUCT_NAME[4]],
	'树胶':[CONSTRUCT_NAME[1],CONSTRUCT_NAME[5]]
}; // 装置连接的图结构 依赖于 COMPONENT_NAME & CONSTRUCT_NAME

// Monster Class : 等级 名字 攻击点 命中点 是否是精神类敌人
var monster01_01 = new Monster(1,'冰原巨熊',[1,1],[5,6]); // 原翻译 冰熊
var monster01_02 = new Monster(2,'流浪匪寇',[1,1],[6,6]); // 原翻译 流寇
var monster01_03 = new Monster(3,'血色恶狼',[1,2],[6,6]); // 原翻译 雪狼
var monster01_04 = new Monster(4,'食马巨鹰',[1,3],[6,6]); // 原翻译 食马巨鹰
var monster01_05 = new Monster(5,'山极巨人',[1,4],[6,6]); // 原翻译 峰顶巨人
var monster01 = [monster01_01,monster01_02,monster01_03,monster01_04,monster01_05];

var monster02_01 = new Monster(1,'流氓盗贼',[1,2],[5,6]);
var monster02_02 = new Monster(2,'鸦雀影毯',[1,1],[6,6]);
var monster02_03 = new Monster(3,'倒角野牛',[1,1],[6,6]); // 原翻译 霍恩巴克野牛
var monster02_04 = new Monster(4,'草背巨魔',[1,3],[5,6]);
var monster02_05 = new Monster(5,'雷电之王',[1,4],[6,6],true);
var monster02 = [monster02_01,monster02_02,monster02_03,monster02_04,monster02_05];

var monster03_01 = new Monster(1,'躁动妖精',[1,1],[5,6]);
var monster03_02 = new Monster(2,'透翅猛禽',[1,1],[6,6]);
var monster03_03 = new Monster(3,'探触魔爪',[1,2],[6,6]);
var monster03_04 = new Monster(4,'暴戾亚龙',[1,3],[6,6]);
var monster03_05 = new Monster(5,'海中巨蛇',[1,4],[6,6]); //  原翻译 利维坦蛇
var monster03 = [monster03_01,monster03_02,monster03_03,monster03_04,monster03_05];

var monster04_01 = new Monster(1,'宝石巨蟒',[1,1],[5,6]); // 原翻译 杰姆斯凯尔巨蟒
var monster04_02 = new Monster(2,'远古鳄鱼',[1,2],[6,6]);
var monster04_03 = new Monster(3,'大陆恶蛟',[1,2],[6,6]);
var monster04_04 = new Monster(4,'深海水蛭',[1,3],[6,6]);
var monster04_05 = new Monster(5,'潮汐宿主',[1,4],[6,6]);
var monster04 = [monster04_01,monster04_02,monster04_03,monster04_04,monster04_05];

var monster05_01 = new Monster(1,'古墓盗贼',[1,1],[5,6]); // 原翻译 盗墓贼
var monster05_02 = new Monster(2,'灯火幽灵',[1,1],[6,6],true);
var monster05_03 = new Monster(3,'复仇鬼影',[1,2],[6,6],true);
var monster05_04 = new Monster(4,'梦魇鳌蟹',[1,3],[6,6]);
var monster05_05 = new Monster(5,'虚幻无名',[1,4],[6,6],true);
var monster05 = [monster05_01,monster05_02,monster05_03,monster05_04,monster05_05];

var monster06_01 = new Monster(1,'恶魔顽童',[1,1],[5,6]);
var monster06_02 = new Monster(2,'叛徒术士',[1,2],[5,6]);
var monster06_03 = new Monster(3,'火焰巨蜥',[1,3],[5,6]);
var monster06_04 = new Monster(4,'星火元素',[1,3],[6,6],true);
var monster06_05 = new Monster(5,'火熔精灵',[1,4],[6,6],true);
var monster06 = [monster06_01,monster06_02,monster06_03,monster06_04,monster06_05];
var monsterSet = [monster01,monster02,monster03,monster04,monster05,monster06];

// Wilderness Class : 名字 编号 装置 组件 宝物 时间轴 怪物组 战斗区域尺寸
var wilderness01 = new Wilderness(WILDERNESS_NAME[0],6,CONSTRUCT_NAME[0],COMPONENT_NAME[0],TREASURE_NAME[4],[-1,-1,0,-1,0,0],monster01,[],6);
var wilderness02 = new Wilderness(WILDERNESS_NAME[1],4,CONSTRUCT_NAME[1],COMPONENT_NAME[1],TREASURE_NAME[3],[-1,0,-1,0,-1,0],monster02,[],6);
var wilderness03 = new Wilderness(WILDERNESS_NAME[2],5,CONSTRUCT_NAME[2],COMPONENT_NAME[2],TREASURE_NAME[5],[-1,0,0,-1,0,0],monster03,[],6);
var wilderness04 = new Wilderness(WILDERNESS_NAME[3],2,CONSTRUCT_NAME[3],COMPONENT_NAME[3],TREASURE_NAME[1],[-1,0,0,-1,0,0],monster04,[],6);
var wilderness05 = new Wilderness(WILDERNESS_NAME[4],1,CONSTRUCT_NAME[4],COMPONENT_NAME[4],TREASURE_NAME[0],[-1,-1,0,-1,0,0],monster05,[],6);
var wilderness06 = new Wilderness(WILDERNESS_NAME[5],3,CONSTRUCT_NAME[5],COMPONENT_NAME[5],TREASURE_NAME[2],[-1,0,-1,0,-1,0],monster06,[],6);
var wildernessSet=[wilderness01,wilderness02,wilderness03,wilderness04,wilderness05,wilderness06];