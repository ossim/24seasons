const seasons = [
  {
    eng: 'Spring Begins',
    chi: '立春',
    py: 'Lìchūn',
    start: {
      mon: 1,
      day: 4
    },
    end: {
      mon: 1,
      day: 19
    },
    hou: [
      {
        eng: 'The east wind thaws the frozen earth.',
        chi: '东风解冻',
        py: 'dōngfēng jiědòng',
        start: {
          mon: 1,
          day: 4
        },
        end: {
          mon: 1,
          day: 9
        },
      },
      {
        eng: 'Ground-beetles stir from hibernation.',
        chi: '蛰虫始振',
        py: 'zhéchóng shǐ zhèn',
        start: {
          mon: 1,
          day: 9
        },
        end: {
          mon: 1,
          day: 14
        },
      },
      {
        eng: 'Fish swim beneath the ice.',
        chi: '鱼陟负冰',
        py: 'yú zhì fù bīng',
        start: {
          mon: 1,
          day: 14
        },
        end: {
          mon: 1,
          day: 19
        },
      },
    ]
  },
  {
    eng: 'Rain Waters',
    chi: '雨水',
    py: 'Yǔshuǐ',
    start: {
      mon: 1,
      day: 19
    },
    end: {
      mon: 2,
      day: 6
    },
    hou: [
      {
        eng: 'Otters offer fish to heaven.',
        chi: '獺祭魚',
        py: 'tǎ jì yú',
        start: {
          mon: 1,
          day: 19
        },
        end: {
          mon: 1,
          day: 24
        },
      },
      {
        eng: 'Geese migrate out to the north.',
        chi: '候雁北',
        py: 'hòu yàn běi',
        start: {
          mon: 1,
          day: 24
        },
        end: {
          mon: 2,
          day: 1
        },
      },
      {
        eng: 'Greenery sprouts.',
        chi: '草木萌动',
        py: 'cǎomù méngdòng',
        start: {
          mon: 2,
          day: 1
        },
        end: {
          mon: 2,
          day: 6
        },
      },
    ]
  },
  {
    eng: 'Insects Awaken',
    chi: '惊蛰',
    py: 'Jīngzhé',
    start: {
      mon: 2,
      day: 6
    },
    end: {
      mon: 2,
      day: 21
    },
    hou: [
      {
        eng: 'Peach trees blossom.', 
        chi: '桃始华',
        py: 'táo shǐ huá',
        start: {
          mon: 2,
          day: 6
        },
        end: {
          mon: 2,
          day: 11
        },
      },
      {
        eng: 'Orioles sing.',
        chi: '仓庚鸣',
        py: 'cānggēng míng',
        start: {
          mon: 2,
          day: 11
        },
        end: {
          mon: 2,
          day: 16
        },
      },
      {
        eng: 'Hawks become doves.',
        chi: '鹰化为鸠',
        py: 'yīng huàwéi jiū',
        start: {
          mon: 2,
          day: 16
        },
        end: {
          mon: 2,
          day: 21
        },
      },
    ]
  },
  {
    eng: 'Spring Equinox',
    chi: '春分',
    py: 'Chūnfēn',
    start: {
      mon: 2,
      day: 21
    },
    end: {
      mon: 3,
      day: 5
    },
    hou: [
      {
        eng: 'Sparrows fly out.', 
        chi: '玄鸟至',
        py: 'xuánniǎo zhì',
        start: {
          mon: 2,
          day: 21
        },
        end: {
          mon: 2,
          day: 26
        },
      },
      {
        eng: 'Thunder rumbles.',
        chi: '雷乃发声',
        py: 'léi nǎi fā shēng',
        start: {
          mon: 2,
          day: 26
        },
        end: {
          mon: 2,
          day: 31
        },
      },
      {
        eng: 'Lightning flashes.',
        chi: '始电',
        py: 'shǐ diàn',
        start: {
          mon: 2,
          day: 31
        },
        end: {
          mon: 3,
          day: 5
        },
      },
    ]
  },
  {
    eng: 'Clear and Bright',
    chi: '清明',
    py: 'Qīngmíng',
    start: {
      mon: 3,
      day: 5
    },
    end: {
      mon: 3,
      day: 20
    },
    hou: [
      {
        eng: 'Pawlonia trees blossom.', 
        chi: '桐始华',
        py: 'tóng shǐ huá',
        start: {
          mon: 3,
          day: 5
        },
        end: {
          mon: 3,
          day: 10
        },
      },
      {
        eng: 'Voles become quails.',
        chi: '田鼠化为鴽',
        py: 'tiánshǔ huàwéi rú',
        start: {
          mon: 3,
          day: 10
        },
        end: {
          mon: 3,
          day: 15
        },
      },
      {
        eng: 'Rainbows glimmer.',
        chi: '虹始见',
        py: 'hóng shǐ jiàn',
        start: {
          mon: 3,
          day: 15
        },
        end: {
          mon: 3,
          day: 20
        },
      },
    ]
  },
  {
    eng: 'Grain Rain',
    chi: '谷雨',
    py: 'Gǔyǔ',
    start: {
      mon: 3,
      day: 20
    },
    end: {
      mon: 4,
      day: 6
    },
    hou: [
      {
        eng: 'Pond weeds flourish.', 
        chi: '萍始生',
        py: 'píng shǐ shēng',
        start: {
          mon: 3,
          day: 20
        },
        end: {
          mon: 3,
          day: 25
        },
      },
      {
        eng: 'Cuckoos preen and flutter.',
        chi: '鸣鸠拂奇羽',
        py: 'míngjiū fú qí yǔ',
        start: {
          mon: 3,
          day: 25
        },
        end: {
          mon: 3,
          day: 30
        },
      },
      {
        eng: 'Hoopoes alight in mulberry trees.',
        chi: '戴胜降于桑',
        py: 'dàishèng jiàn yú sāng',
        start: {
          mon: 3,
          day: 30
        },
        end: {
          mon: 4,
          day: 6
        },
      },
    ]
  },
  {
    eng: 'Summer Begins',
    chi: '立夏',
    py: 'Lìxià',
    start: {
      mon: 4,
      day: 6
    },
    end: {
      mon: 4,
      day: 21
    },
    hou: [
      {
        eng: 'Grasshoppers chirp.', 
        chi: '蝼蝈鸣',
        py: 'lóuguō míng',
        start: {
          mon: 4,
          day: 6
        },
        end: {
          mon: 4,
          day: 11
        },
      },
      {
        eng: 'Earthworms wriggle about.',
        chi: '蚯蚓出',
        py: 'qīuyǐn chū',
        start: {
          mon: 4,
          day: 11
        },
        end: {
          mon: 4,
          day: 16
        },
      },
      {
        eng: 'Gourd vines flourish.',
        chi: '王瓜生',
        py: 'wángguā shēng',
        start: {
          mon: 4,
          day: 16
        },
        end: {
          mon: 4,
          day: 21
        },
      },
    ]
  },
  {
    eng: 'Grain Buds',
    chi: '小满',
    py: 'Xiǎomǎn',
    start: {
      mon: 4,
      day: 21
    },
    end: {
      mon: 5,
      day: 6
    },
    hou: [
      {
        eng: 'Bitter greens flourish.', 
        chi: '苦菜秀',
        py: 'kǔcài xiù',
        start: {
          mon: 4,
          day: 21
        },
        end: {
          mon: 4,
          day: 26
        },
      },
      {
        eng: 'Grasses die back.',
        chi: '靡草死',
        py: 'mícǎo sǐ',
        start: {
          mon: 4,
          day: 26
        },
        end: {
          mon: 5,
          day: 1
        },
      },
      {
        eng: 'Wheats and cereals mature.',
        chi: '麦秋至',
        py: 'mài qiū zhì',
        start: {
          mon: 5,
          day: 1
        },
        end: {
          mon: 5,
          day: 6
        },
      },
    ]
  },
  {
    eng: 'Grain in Ear',
    chi: '芒种',
    py: 'Mángzhòng',
    start: {
      mon: 5,
      day: 6
    },
    end: {
      mon: 5,
      day: 21
    },
    hou: [
      {
        eng: 'Mantises emerge.', 
        chi: '螳螂生',
        py: 'tángláng shēng',
        start: {
          mon: 5,
          day: 6
        },
        end: {
          mon: 5,
          day: 11
        },
      },
      {
        eng: 'Shrikes sing.',
        chi: '鵙始鸣',
        py: 'jú shǐ míng',
        start: {
          mon: 5,
          day: 11
        },
        end: {
          mon: 5,
          day: 16
        },
      },
      {
        eng: 'Mockingbirds go silent.',
        chi: '反舌无声',
        py: 'fǎnshé wú shēng',
        start: {
          mon: 5,
          day: 16
        },
        end: {
          mon: 5,
          day: 21
        },
      },
    ]
  },
  {
    eng: 'Summer Solstice',
    chi: '夏至',
    py: 'Xiàzhì',
    start: {
      mon: 5,
      day: 21
    },
    end: {
      mon: 6,
      day: 7
    },
    hou: [
      {
        eng: 'Summer deers shed their antlers.', 
        chi: '鹿角解',
        py: 'lù jiǎo jiě',
        start: {
          mon: 5,
          day: 21
        },
        end: {
          mon: 5,
          day: 26
        },
      },
      {
        eng: 'Cicadas sing.',
        chi: '蜩始鸣',
        py: 'tiáo shǐ míng',
        start: {
          mon: 5,
          day: 26
        },
        end: {
          mon: 6,
          day: 1
        },
      },
      {
        eng: 'Pinellias flourish.',
        chi: '半夏生',
        py: 'bànxià shēng',
        start: {
          mon: 6,
          day: 1
        },
        end: {
          mon: 6,
          day: 7
        },
      },
    ]
  },
  {
    eng: 'Small Heat',
    chi: '小暑',
    py: 'Xiǎoshǔ',
    start: {
      mon: 6,
      day: 7
    },
    end: {
      mon: 6,
      day: 23
    },
    hou: [
      {
        eng: 'Warm winds blow.', 
        chi: '温风至',
        py: 'wēn fēng zhì',
        start: {
          mon: 6,
          day: 7
        },
        end: {
          mon: 6,
          day: 12
        },
      },
      {
        eng: 'Crickets chirp in the village.',
        chi: '蟋蟀居壁',
        py: 'xīshuài jū bì',
        start: {
          mon: 6,
          day: 12
        },
        end: {
          mon: 6,
          day: 17
        },
      },
      {
        eng: 'Hawks spar in the sky.',
        chi: '鹰始挚',
        py: 'yīng shǐ zhì',
        start: {
          mon: 6,
          day: 17
        },
        end: {
          mon: 6,
          day: 23
        },
      },
    ]
  },
  {
    eng: 'Great Heat',
    chi: '大暑',
    py: 'Dàshǔ',
    start: {
      mon: 6,
      day: 23
    },
    end: {
      mon: 7,
      day: 8
    },
    hou: [
      {
        eng: 'Decaying grasses become fireflies.',
        chi: '腐草为萤',
        py: 'fǔcǎo wéi yíng',
        start: {
          mon: 6,
          day: 23
        },
        end: {
          mon: 6,
          day: 28
        },
      },
      {
        eng: 'The earth becomes muddy and moist.',
        chi: '土润溽',
        py: 'tǔ rùn rù',
        start: {
          mon: 6,
          day: 28
        },
        end: {
          mon: 7,
          day: 3
        },
      },
      {
        eng: 'Heavy rain begins.',
        chi: '大雨时行',
        py: 'dàyǔ shíxíng',
        start: {
          mon: 7,
          day: 3
        },
        end: {
          mon: 7,
          day: 8
        },
      },
    ]
  },
  {
    eng: 'Autumn Begins',
    chi: '立秋',
    py: 'Lìqiū',
    start: {
      mon: 7,
      day: 8
    },
    end: {
      mon: 7,
      day: 23
    },
    hou: [
      {
        eng: 'Cold winds blow.',
        chi: '凉风至',
        py: 'liángfēng zhì',
        start: {
          mon: 7,
          day: 8
        },
        end: {
          mon: 7,
          day: 13
        },
      },
      {
        eng: 'White dew descends.',
        chi: '白露降',
        py: 'báilù jiàng',
        start: {
          mon: 7,
          day: 13
        },
        end: {
          mon: 7,
          day: 18
        },
      },
      {
        eng: 'Coldweather cicadas sing.',
        chi: '寒蝉鸣',
        py: 'hánchán míng',
        start: {
          mon: 7,
          day: 18
        },
        end: {
          mon: 7,
          day: 23
        },
      },
    ]
  },
  {
    eng: 'Heat Dissipates',
    chi: '处暑',
    py: 'Chǔshǔ',
    start: {
      mon: 7,
      day: 23
    },
    end: {
      mon: 8,
      day: 8
    },
    hou: [
      {
        eng: 'Hawks offer prey to heaven.',
        chi: '鹰乃祭鸟',
        py: 'yīng nǎi jì niǎo',
        start: {
          mon: 7,
          day: 23
        },
        end: {
          mon: 7,
          day: 28
        },
      },
      {
        eng: 'Heaven and earth begin to purge life.',
        chi: '天地始肃',
        py: 'tiāndì shǐ sù',
        start: {
          mon: 7,
          day: 28
        },
        end: {
          mon: 8,
          day: 3
        },
      },
      {
        eng: 'The final millet crops turn ripe.',
        chi: '禾乃登',
        py: 'hé nǎi dēng',
        start: {
          mon: 8,
          day: 3
        },
        end: {
          mon: 8,
          day: 8
        },
      },
    ]
  },
  {
    eng: 'White Dew',
    chi: '白露',
    py: 'Báilù',
    start: {
      mon: 8,
      day: 8
    },
    end: {
      mon: 8,
      day: 23
    },
    hou: [
      {
        eng: 'Geese migrate back to the south.',
        chi: '鸿雁来',
        py: 'hóngyàn lái',
        start: {
          mon: 8,
          day: 8
        },
        end: {
          mon: 8,
          day: 13
        },
      },
      {
        eng: 'Sparrows return.',
        chi: '玄鸟归',
        py: 'xuánniǎo guī',
        start: {
          mon: 8,
          day: 13
        },
        end: {
          mon: 8,
          day: 18
        },
      },
      {
        eng: 'Bird flocks stockpile for the cold.',
        chi: '群鸟养羞',
        py: 'qúnniǎo yǎngxiū',
        start: {
          mon: 8,
          day: 18
        },
        end: {
          mon: 8,
          day: 23
        },
      },
    ]
  },
  {
    eng: 'Autumn Equinox',
    chi: '秋分',
    py: 'Qiūfēn',
    start: {
      mon: 8,
      day: 23
    },
    end: {
      mon: 9,
      day: 8
    },
    hou: [
      {
        eng: 'Thunder abates.',
        chi: '雷始收声',
        py: 'léi shǐ shōu shēng',
        start: {
          mon: 8,
          day: 23
        },
        end: {
          mon: 8,
          day: 28
        },
      },
      {
        eng: 'Ground-beetles begin to burrow.',
        chi: '蛰虫坯户',
        py: 'zhéchóng pī hù',
        start: {
          mon: 8,
          day: 28
        },
        end: {
          mon: 9,
          day: 3
        },
      },
      {
        eng: 'Waters dwindle.',
        chi: '水始涸',
        py: 'shuǐ shǐ hé',
        start: {
          mon: 9,
          day: 3
        },
        end: {
          mon: 9,
          day: 8
        },
      },
    ]
  },
  {
    eng: 'Cold Dew',
    chi: '寒露',
    py: 'Hánlù',
    start: {
      mon: 9,
      day: 8
    },
    end: {
      mon: 9,
      day: 23
    },
    hou: [
      {
        eng: 'Straggler geese return from migration.',
        chi: '鸿鴈来宾',
        py: 'hóngyàn láibīn',
        start: {
          mon: 9,
          day: 8
        },
        end: {
          mon: 9,
          day: 13
        },
      },
      {
        eng: 'Diving skylarks become clams.',
        chi: '雀入大水为蛤',
        py: 'què rù dàshuǐ wéi gé',
        start: {
          mon: 9,
          day: 13
        },
        end: {
          mon: 9,
          day: 18
        },
      },
      {
        eng: 'Yellow chrysanthemum flowers bloom.',
        chi: '菊有黄花',
        py: 'jú yǒu huánghuā',
        start: {
          mon: 9,
          day: 18
        },
        end: {
          mon: 9,
          day: 23
        },
      },
    ]
  },
  {
    eng: 'Front Descends',
    chi: '霜降',
    py: 'Shuāngjiàng',
    start: {
      mon: 9,
      day: 23
    },
    end: {
      mon: 10,
      day: 7
    },
    hou: [
      {
        eng: 'Jackals offer prey to heaven.',
        chi: '豺乃祭兽',
        py: 'chái nǎi jì shòu',
        start: {
          mon: 9,
          day: 23
        },
        end: {
          mon: 9,
          day: 28
        },
      },
      {
        eng: 'Leaves yellow and fall.',
        chi: '草木黄落',
        py: 'cǎomù huángluò',
        start: {
          mon: 9,
          day: 28
        },
        end: {
          mon: 10,
          day: 2
        },
      },
      {
        eng: 'Ground-beetles hibernate.',
        chi: '蛰虫咸俯',
        py: 'zhéchóng xiánfǔ',
        start: {
          mon: 10,
          day: 2
        },
        end: {
          mon: 10,
          day: 7
        },
      },
    ]
  },
  {
    eng: 'Winter Begins',
    chi: '立冬',
    py: 'Lìdōng',
    start: {
      mon: 10,
      day: 7
    },
    end: {
      mon: 10,
      day: 22
    },
    hou: [
      {
        eng: 'Water freezes.',
        chi: '水始冰',
        py: 'shǔi shǐ bīng',
        start: {
          mon: 10,
          day: 7
        },
        end: {
          mon: 10,
          day: 12
        },
      },
      {
        eng: 'The earth freezes.',
        chi: '地始冻',
        py: 'dì shǐ dòng',
        start: {
          mon: 10,
          day: 12
        },
        end: {
          mon: 10,
          day: 17
        },
      },
      {
        eng: 'Diving pheasants become oysters.',
        chi: '雉入大水为蜃',
        py: 'zhì rù dàshuǐ wéi shèn',
        start: {
          mon: 10,
          day: 17
        },
        end: {
          mon: 10,
          day: 22
        },
      },
    ]
  },
  {
    eng: 'Small Snow',
    chi: '小雪',
    py: 'Xiǎoxuě',
    start: {
      mon: 10,
      day: 22
    },
    end: {
      mon: 11,
      day: 7
    },
    hou: [
      {
        eng: 'Rainbows disappear.',
        chi: '虹藏不见',
        py: 'hóng cáng bū jiàn',
        start: {
          mon: 10,
          day: 22
        },
        end: {
          mon: 10,
          day: 27
        },
      },
      {
        eng: 'The atmosphere rises.',
        chi: '天气上升',
        py: 'tiānqì shàngshēng',
        start: {
          mon: 10,
          day: 27
        },
        end: {
          mon: 11,
          day: 2
        },
      },
      {
        eng: 'All is occluded and becomes winter.',
        chi: '闭塞而成冬',
        py: 'bì sè ér chéng dōng',
        start: {
          mon: 11,
          day: 2
        },
        end: {
          mon: 11,
          day: 7
        },
      },
    ]
  },
  {
    eng: 'Great Snow',
    chi: '大雪',
    py: 'Dàxuě',
    start: {
      mon: 11,
      day: 7
    },
    end: {
      mon: 11,
      day: 22
    },
    hou: [
      {
        eng: 'All birdsong is silent.',
        chi: '鶡鴠不鸣',
        py: 'hédàn bù míng',
        start: {
          mon: 11,
          day: 7
        },
        end: {
          mon: 11,
          day: 12
        },
      },
      {
        eng: 'Tigers begin courtship.',
        chi: '虎始交',
        py: 'hǔ shǐ jiāo',
        start: {
          mon: 11,
          day: 12
        },
        end: {
          mon: 11,
          day: 17
        },
      },
      {
        eng: 'Iris buds emerge from the snow.',
        chi: '荔挺出',
        py: 'lì tǐng chū',
        start: {
          mon: 11,
          day: 17
        },
        end: {
          mon: 11,
          day: 22
        },
      },
    ]
  },
  {
    eng: 'Winter Solstice',
    chi: '冬至',
    py: 'Dōngzhì',
    start: {
      mon: 11,
      day: 22
    },
    end: {
      mon: 0,
      day: 6
    },
    hou: [
      {
        eng: 'Earthworms twist into knots.',
        chi: '蚯蚓结',
        py: 'qīuyǐn jié',
        start: {
          mon: 11,
          day: 22
        },
        end: {
          mon: 11,
          day: 27
        },
      },
      {
        eng: 'Elaphure deers shed their antlers.',
        chi: '麋角解',
        py: 'mí jiǎo jiě',
        start: {
          mon: 11,
          day: 27
        },
        end: {
          mon: 0,
          day: 1
        },
      },
      {
        eng: 'Hot springs bubble and flow.',
        chi: '水泉动',
        py: 'shuǐquán dòng',
        start: {
          mon: 0,
          day: 1
        },
        end: {
          mon: 0,
          day: 6
        },
      },
    ]
  },
  {
    eng: 'Small Cold',
    chi: '小寒',
    py: 'Xiǎohán',
    start: {
      mon: 0,
      day: 6
    },
    end: {
      mon: 0,
      day: 20
    },
    hou: [
      {
        eng: 'Sparrows fly north.',
        chi: '雁北乡',
        py: 'yàn běi xiáng',
        start: {
          mon: 0,
          day: 6
        },
        end: {
          mon: 0,
          day: 11
        },
      },
      {
        eng: 'Magpies begin to nest.',
        chi: '鹊始巢',
        py: 'què shǐ cháo',
        start: {
          mon: 0,
          day: 11
        },
        end: {
          mon: 0,
          day: 16
        },
      },
      {
        eng: 'Pheasants call.',
        chi: '雉雊',
        py: 'zhì gòu',
        start: {
          mon: 0,
          day: 16
        },
        end: {
          mon: 0,
          day: 20
        },
      },
    ]
  },
  {
    eng: 'Great Cold',
    chi: '大寒',
    py: 'Dàhán',
    start: {
      mon: 0,
      day: 20
    },
    end: {
      mon: 1,
      day: 4
    },
    hou: [
      {
        eng: 'Chickens fertilize their brood.',
        chi: '鸡乳',
        py: 'jī rú',
        start: {
          mon: 0,
          day: 20
        },
        end: {
          mon: 0,
          day: 25
        },
      },
      {
        eng: 'Birds of prey hover in high predation.',
        chi: '征鸟厉疾',
        py: 'zhēngniǎo lì jí',
        start: {
          mon: 0,
          day: 25
        },
        end: {
          mon: 0,
          day: 30
        },
      },
      {
        eng: 'Lake ice at its thickest.',
        chi: '水泽腹坚',
        py: 'shǔi zé fù jiān',
        start: {
          mon: 0,
          day: 30
        },
        end: {
          mon: 1,
          day: 4
        },
      },
    ]
  },
]

export default seasons;