
var players = {
    "Bodzik": {
        name: "Bodzik",
        lvl: "50",
        str: "50",
        agi: "100",
        int: "100",
        hel: "50",
        itl: "0",
        wdm: "0",
        spr: "0",
        health: "0",
        mana: "0",
        strikes: "2",
        blocks: "2",
        stock_list: ["hp-bottle", "scroll-of-reincarnation", "heal-p", "hp-bottle"],
        stock: [],
        passive: {},
        reload: {},
        weapon_skill_lvl: {
           swords: 0,
           axes: 0,
           maces: 0,
           knifes: 0,
           shields: 0,
           staffs: 0,
        },
        damage_power: 0,
        shield_block_chance: 0,
        witchcraft: {
            max: 0,
            used: 0,
        },
        magic_skill_lvl: {
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_power_lvl:{
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_crit_lvl: 0,
        magic_list: [],
        magics: [],
        anti_magic_protect: {
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_dodge: 6,
        damage_protect: {
            full_protect: 0,
            pricking_protect: 0,
            chopping_protect: 0,
            crushing_protect: 0,
            cutting_protect: 0,
        }
    },
    "Voronka": {
        name: "Voronka",
        lvl: "50",
        str: "75",
        agi: "125",
        int: "25",
        hel: "75",
        itl: "0",
        wdm: "0",
        spr: "0",
        health: "0",
        mana: "0",
        strikes: "2",
        blocks: "2",
        stock_list: ["hp-bottle", "hp-bottle", "heal-p", "hp-bottle"],
        stock: [],
        passive: {},
        reload: {},
        weapon_skill_lvl: {
            swords: 0,
            axes: 0,
            maces: 0,
            knifes: 0,
            shields: 0,
            staffs: 0,
        },
        damage_power: 0,
        shield_block_chance: 0,
        witchcraft: {
            max: 0,
            used: 0,
        },
        magic_skill_lvl:{
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_power_lvl:{
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_crit_lvl: 0,
        magic_list: [],
        magics: [],
        anti_magic_protect: {
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_dodge: 6,
        damage_protect: {
            full_protect: 0,
            pricking_protect: 0,
            chopping_protect: 0,
            crushing_protect: 0,
            cutting_protect: 0,
        }
    },
    "Rem": {
        name: "Rem",
        lvl: "50",
        str: "75",
        agi: "25",
        int: "150",
        hel: "50",
        itl: "0",
        wdm: "0",
        spr: "0",
        health: "0",
        mana: "0",
        strikes: "2",
        blocks: "2",
        stock_list: ["hp-bottle", "hp-bottle", "hp-bottle", "hp-bottle"],
        stock: [],
        passive: {},
        reload: {},
        weapon_skill_lvl: {
            swords: 0,
            axes: 0,
            maces: 0,
            knifes: 0,
            shields: 0,
            staffs: 0,
        },
        damage_power: 0,
        shield_block_chance: 0,
        witchcraft: {
            max: 0,
            used: 0,
        },
        magic_skill_lvl:{
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_power_lvl:{
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_crit_lvl: 0,
        magic_list: [],
        magics: [],
        anti_magic_protect: {
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_dodge: 6,
        damage_protect: {
            full_protect: 0,
            pricking_protect: 0,
            chopping_protect: 0,
            crushing_protect: 0,
            cutting_protect: 0,
        }
    },
    "Sup": {
        name: "Sup",
        lvl: "50",
        str: "150",
        agi: "15",
        int: "15",
        hel: "120",
        itl: "0",
        wdm: "0",
        spr: "0",
        health: "0",
        mana: "0",
        strikes: "2",
        blocks: "2",
        stock_list: ["hp-bottle", "hp-bottle", "heal-p", "heal-p"],
        stock: [],
        passive: {},
        reload: {},
        weapon_skill_lvl: {
            swords: 0,
            axes: 0,
            maces: 0,
            knifes: 0,
            shields: 0,
            staffs: 0,
        },
        damage_power: 0,
        shield_block_chance: 0,
        witchcraft: {
            max: 0,
            used: 0,
        },
        magic_skill_lvl:{
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_power_lvl:{
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_crit_lvl: 0,
        magic_list: [],
        magics: [],
        anti_magic_protect: {
            fire: 0,
            water: 0,
            earth: 0,
            air: 0,
            light: 0,
            darkness: 0
        },
        magic_dodge: 6,
        damage_protect: {
            full_protect: 0,
            pricking_protect: 0,
            chopping_protect: 0,
            crushing_protect: 0,
            cutting_protect: 0,
        }
    },
    "Goba": {
        name: "Goba",
        lvl: "50",
        str: "15",
        agi: "5",
        int: "5",
        hel: "75",
        itl: "120",
        wdm: "100",
        spr: "0",
        health: "0",
        mana: "0",
        strikes: "2",
        blocks: "2",
        stock_list: ["hp-bottle", "hp-bottle", "hp-bottle", "hp-bottle", "heal-p", "heal-p"],
        stock: [],
        passive: {},
        reload: {},
        weapon_skill_lvl: {
            swords: 0,
            axes: 0,
            maces: 0,
            knifes: 0,
            shields: 0,
            staffs: 0,
        },
        damage_power: 0,
        shield_block_chance: 0,
        witchcraft: {
            max: 0,
            used: 0,
        },
        magic_skill_lvl:{
          fire: 11,
          water: 0,
          earth: 0,
          air: 0,
          light: 0,
          darkness: 0
        },
        magic_power_lvl:{
          fire: 55,
          water: 0,
          earth: 0,
          air: 0,
          light: 0,
          darkness: 0
        },
        magic_crit_lvl: 0,
        magic_list: ["fire-blast", "ignite", "sharp-face", "magic-shield", "mana-shield", "warmth", "multicast"],
        magics: [],
        anti_magic_protect: {
          fire: 50,
          water: 50,
          earth: 50,
          air: 50,
          light: 50,
          darkness: 50
        },
        magic_dodge: 6,
        damage_protect: {
            full_protect: 0,
            pricking_protect: 0,
            chopping_protect: 0,
            crushing_protect: 0,
            cutting_protect: 0,
        }
  }
};


var stock_db = {
    "scroll-of-reincarnation":{
      name: "scroll-of-reincarnation",
      full_name: "Scroll of Reincarnation",
      _type: "stock",
      title: "Restore maximum HP",
      hint: "Restore All HP if HP < 10%",
      use_count: 1,
      is_used: false,

      use: function(player, id){
          let item_index = id - 1;
          let used_item = player.stock[item_index];

          let max_hp = parseInt(getHealthMaxLevel(player.str, player.hel));
          let percent_hp = parseInt(max_hp * 20 / 100);

          if(player.health < percent_hp){
              player.health = max_hp;

              used_item.use_count -= 1;
              if(used_item.use_count <= 0){
                  used_item.use_count = 0;
                  used_item.is_used = true;
              }

              log.push("<hr /><b style='color: #0054a2'>" + player.name +
                  "</b> использовал <b style='color: #04ab17'>" + this.full_name +
                  "</b> и восстановил все ХП");

              player.stock[item_index] = used_item;

              localStorage.setItem(player.name, JSON.stringify(player));
              localStorage.setItem("Log", JSON.stringify(log));
          }
          else {
              alert("Уровень здоровья должен быть ниже " + percent_hp + "ХП");
          }
      }
    },

    "heal-p":{
      name: "heal-p",
      full_name: "Bottle of Regeneration",
      _type: "stock",
      title: "Potion of Healing +10%",
      hint: "+10% of HP per 10 turn-s",
      use_count: 1,
      is_used: false,
      passive_count: 10,

      use: function(player, id){

          let item_index = id - 1;
          let used_item = player.stock[item_index];

          used_item.use_count -= 1;

          if(used_item.use_count <= 0){
                used_item.use_count = 0;
                used_item.is_used = true;
          }

          let name = used_item.name + "-" + id;
          player.passive[name] = used_item;

          player.stock[item_index] = used_item;

          log.push("<hr />Игрок <b style='color: #0054a2'>" + player.name +
              "</b> использовал <b style='color: #04ab17'>" + this.full_name +
              "</b>");

          localStorage.setItem(player.name, JSON.stringify(player));
          localStorage.setItem("Log", JSON.stringify(log));
      },

      passive: function(player, index){

          let msg;
          if(player.passive[index].passive_count <= 0){
              delete player.passive[index];

              msg = "<hr />У <b style='color: #0054a2'>" + player.name +
                  "</b> закончился еффект от <b style='color: #04ab17'>" + this.full_name +
                  "</b>";
          }
          else{
              player.passive[index].passive_count -= 1;

              let max_hp = parseInt(getHealthMaxLevel(player.str, player.hel));
              let percent = parseInt(max_hp * 1/ 100);

              if(player.health <= max_hp - percent){
                  player.health += percent;
              }
              else{
                  player.health = max_hp;
              }

              msg = "<hr />Игроку <b style='color: #0054a2'>" + player.name +
                  "</b><b style='color: #04ab17'> +1% ХП(+" + percent + "ХП)</b>" +
                  " от еффекта <b>" + this.full_name + "</b>";
          }

          return msg;
      }
    },

    "hp-bottle": {
        name: "hp-bottle",
        full_name: "Bottle of HP +250",
        _type: "stock",
        title: "Bottle of HP + 250",
        hint: "+250 HP",
        use_count: 1,
        is_used: false,

        use: function(player, id){

            let item_index = id - 1;
            let used_item = player.stock[item_index];

            used_item.use_count -= 1;

            if(used_item.use_count <= 0){
                used_item.use_count = 0;
                used_item.is_used = true;
            }

            let max_hp = parseInt(getHealthMaxLevel(player.str, player.hel));
            if(player.health <= max_hp - 250){
                player.health += 250;
            }
            else{
                    player.health = max_hp;
            }

            player.stock[item_index] = used_item;

            log.push("<hr />Игрок <b style='color: #0054a2'>" + player.name +
                "</b> использовал <b style='color: #04ab17'>" + this.full_name +
                "</b>");

            localStorage.setItem("Log", JSON.stringify(log));
            localStorage.setItem(player.name, JSON.stringify(player));
        }
    }
};

var magic_db = {
    "multicast": {
        name: "multicast",
        full_name: "Magic Multicast",
        _type: "magic",
        m_type: "fire",
        title: "Дает шанс прокастовать заклинание 1-3 раза",
        hint: "Шанс мультипрокаста без потери маны",
        reload_time: 7,
        reloading: 7,
        passive_count: 4,
        is_used: false,
        mana_cost: 250,
        percents: {
            "fire-blast": [40, 27, 17],
            "ignite": [35, 25, 13],
        },

        use: function(player, id){
            let used_magic = player.magics[id];

            if(!checkWitchcraft(player)){
                alert("Достигнут придел каста за ход !");

                return;
            }

            if(used_magic.reloading === 0 && used_magic.is_used === true){
                used_magic.reloading = used_magic.reload_time;
                used_magic.is_used = false;
            }

            if(used_magic.is_used){
                alert("Уже была использована !");

                return;
            }

            if(used_magic.mana_cost > player.mana){
                alert("Нехватает маны !");

                return;
            }

            if(used_magic.name in player.passive){
                alert("На вас уже висит етот еффект !");

                return;
            }
            else{
                player.mana -= used_magic.mana_cost;

                used_magic.is_used = true;

                player.passive[used_magic.name] = used_magic;
                player.magics[id] = used_magic;

                player.reload[used_magic.name] = used_magic;
                player.witchcraft.used += 1;

                let msg = "<hr />Игрок <b style='color: #0054a2'>" + player.name +
                    "</b> применил на себя <b style='color: darkred'>" + used_magic.full_name +
                    "</b>";

                log.push(msg);

                localStorage.setItem("Log", JSON.stringify(log));
                localStorage.setItem(player.name, JSON.stringify(player));
            }
        },

        magic_reload: function(player, magic){

            magic.reloading -= 1;

            if(magic.reloading === 0){
                magic.reloading = magic.reload_time;
                magic.is_used = false;

                player.magics.forEach((el, index) => {
                    if(el.name === magic.name) {
                        player.magics[index] = magic;
                    }
                });
            }
        },

        passive: function(target, index){

            let used_magic = target.passive[index];

            let msg;
            if(used_magic.passive_count <= 0){

                msg = "<hr />У <b style='color: #0054a2'>" + target.name +
                    "</b> закончился еффект от <b style='color: darkred'>" + used_magic.full_name +
                    "</b>";

                delete target.passive[index];
            }
            else{
                used_magic.passive_count -= 1;
            }

            return msg;
        },
    },

    "fire-blast": {
        name: "fire-blast",
        full_name: "Fire Blast",
        _type: "magic",
        m_type: "fire",
        title: "Наносит урон зарядом Огня",
        hint: "Может ударить 4 раза за размен",
        reload_time: 1,
        reloading: 1,
        is_used: false,
        mana_cost: 150,
        base_dmg: 140,

        use: function(player, id){

            let used_magic = player.magics[id];

            if(!checkWitchcraft(player)){
                alert("Достигнут придел каста за ход !");

                return;
            }

            if(used_magic.reloading === 0 && used_magic.is_used === true){
                used_magic.reloading = used_magic.reload_time;
                used_magic.is_used = false;
            }

            if(used_magic.is_used){
                alert("Уже была использована !");

                return;
            }

            if(used_magic.mana_cost > player.mana){
                alert("Нехватает маны !");

                return;
            }

            let target = getTarget();

            if(target === undefined){
                alert("Цель не определена");
            }
            else{
                let target_unit = JSON.parse(localStorage.getItem(target));

                let result = getMagicalDamage(used_magic.base_dmg,
                    player.name,
                    target_unit.name,
                    used_magic.m_type
                );

                let damage = result.dmg;

                let target_heal = parseInt(target_unit.health);
                target_unit.health = String(target_heal - damage);

                player.mana -= used_magic.mana_cost;

                if(result.is_crit){
                    log.push("<hr /><b style='color: #0054a2'>" + player.name +
                        "</b> использовал <b style='color: darkred'>" + used_magic.full_name +
                        "</b> на <b style='color: #0054a2'>" + target_unit.name +
                        "</b> и нанес <b>" + damage + "</b>" +
                        "<b style='color: red'> критического</b> урона");
                }
                else{
                    log.push("<hr /><b style='color: #0054a2'>" + player.name +
                        "</b> использовал <b style='color: darkred'>" + used_magic.full_name +
                        "</b> на <b style='color: #0054a2'>" + target_unit.name +
                        "</b> и нанес <b>" + damage + "</b> урона");
                }

                let i;
                //Без мультикаста
                let multicat_percents = [];
                //Проверка на мультикаст и установка процентов и кол-ва прокастов
                if("multicast" in player.passive){
                    multicat_percents = player.passive.multicast.percents[used_magic.name];
                }

                for(i = 0; i <= multicat_percents.length; i++){
                    let chance = __isALuck(multicat_percents[i]);

                    if(chance){
                        let target_heal = parseInt(target_unit.health);

                        result = getMagicalDamage(used_magic.base_dmg,
                            player.name,
                            target_unit.name,
                            used_magic.m_type
                        );

                        damage = result.dmg;
                        target_unit.health = String(target_heal - damage);

                        if(result.is_crit){
                            log.push("<hr /><b style='color: #0054a2'>" + player.name +
                                "</b> использовал <b style='color: darkred'>" + used_magic.full_name +
                                "</b> на <b style='color: #0054a2'>" + target_unit.name +
                                "</b> и нанес <b>" + damage + "</b>" +
                                "<b style='color: red'> критического</b> урона");
                        }
                        else{
                            log.push("<hr /><b style='color: #0054a2'>" + player.name +
                                "</b> использовал <b style='color: darkred'>" + used_magic.full_name +
                                "</b> на <b style='color: #0054a2'>" + target_unit.name +
                                "</b> и нанес <b>" + damage + "</b> урона");
                        }
                    }
                }

                used_magic.is_used = true;

                player.magics[id] = used_magic;

                player.reload[used_magic.name] = used_magic;
                player.witchcraft.used += 1;

                localStorage.setItem("Log", JSON.stringify(log));
                localStorage.setItem(target_unit.name, JSON.stringify(target_unit));
                localStorage.setItem(player.name, JSON.stringify(player));
            }
        },
        
        magic_reload: function(player, magic){

            magic.reloading -= 1;

            if(magic.reloading === 0){
                magic.reloading = magic.reload_time;
                magic.is_used = false;

                player.magics.forEach((el, index) => {
                    if(el.name === magic.name) {
                        player.magics[index] = magic;
                    }
                });
            }
        }
    },

    "ignite": {
        name: "ignite",
        full_name: "Ignite of Fire",
        _type: "magic",
        m_type: "fire",
        title: "Наносит урон ожогом каждый ход",
        hint: "Может наносить урон в течении 5 ходов",
        reload_time: 4,
        reloading: 4,
        is_used: false,
        mana_cost: 125,
        base_dmg: 75,
        passive_count: 3,
        owner: undefined,
        target: undefined,

        use: function(player, id){

            let used_magic = player.magics[id];

            if(!checkWitchcraft(player)){
                alert("Достигнут придел каста за ход !");

                return;
            }

            if(used_magic.reloading === 0 && used_magic.is_used === true){
                used_magic.reloading = used_magic.reload_time;
                used_magic.is_used = false;
            }

            if(used_magic.is_used){
                alert("Уже была использована !");

                return;
            }

            if(used_magic.mana_cost > player.mana){
                alert("Нехватает маны !");

                return;
            }

            let target = getTarget();

            if(target === undefined){
                alert("Цель не определена");
            }
            else{
                let target_unit = JSON.parse(localStorage.getItem(target));

                used_magic.owner = player.name;
                used_magic.target = target_unit.name;

                let unique_m_name = getUniquePassiveId(target_unit, used_magic);

                used_magic.is_used = true;

                target_unit.passive[unique_m_name] = used_magic;

                let i;
                //Без мультикаста
                let multicat_percents = [];
                //Проверка на мультикаст и установка процентов и кол-ва прокастов
                if("multicast" in player.passive){
                    multicat_percents = player.passive.multicast.percents[used_magic.name];
                }

                for(i = 0; i <= multicat_percents.length; i++){
                    let chance = __isALuck(multicat_percents[i]);

                    if(chance){
                        unique_m_name = getUniquePassiveId(target_unit, used_magic);

                        target_unit.passive[unique_m_name] = used_magic;

                        msg = "<hr />Игрок <b style='color: #0054a2'>" + player.name +
                            "</b> наложил <b style='color: darkred'>" + this.full_name +
                            "</b> на игрока <b style='color: #0054a2'>" + target_unit.name +
                            "</b>";

                        log.push(msg);
                    }
                }

                player.magics[id] = used_magic;

                player.reload[used_magic.name] = used_magic;

                player.mana -= used_magic.mana_cost;
                player.witchcraft.used += 1;

                msg = "<hr />Игрок <b style='color: #0054a2'>" + player.name +
                    "</b> наложил <b style='color: darkred'>" + this.full_name +
                    "</b> на игрока <b style='color: #0054a2'>" + target_unit.name +
                    "</b>";

                log.push(msg);

                localStorage.setItem("Log", JSON.stringify(log));
                localStorage.setItem(target_unit.name, JSON.stringify(target_unit));
                localStorage.setItem(player.name, JSON.stringify(player));
            }
        },

        magic_reload: function(player, magic){

            magic.reloading -= 1;

            if(magic.reloading === 0){
                magic.reloading = magic.reload_time;
                magic.is_used = false;

                player.magics.forEach((el, index) => {
                    if(el.name === magic.name) {
                        player.magics[index] = magic;
                    }
                });
            }
        },

        passive: function(target, index){

            let used_magic = target.passive[index];

            let msg;
            if(used_magic.passive_count <= 0){

                msg = "<hr />У <b style='color: #0054a2'>" + target.name +
                    "</b> закончился еффект от <b style='color: darkred'>" + used_magic.full_name +
                    "</b>";

                delete target.passive[index];
            }
            else{
                used_magic.passive_count -= 1;

                let dmg = getMagicalDamage(used_magic.base_dmg,
                    used_magic.owner,
                    used_magic.target,
                    used_magic.m_type);

                target.health -= dmg.dmg;

                if(!dmg.is_crit){
                    msg = "<hr />Игрок <b style='color: #0054a2'>" + target.name +
                        "</b> получил урон от <b style='color: darkred'>" + used_magic.full_name +
                        " (-" + dmg.dmg + ")</b>";
                }
                else{
                    msg = "<hr />Игрок <b style='color: #0054a2'>" + target.name +
                        "</b> получил <b style='color: red'>критический</b> " +
                        "урон от <b style='color: darkred'>" + used_magic.full_name +
                        " (-" + dmg.dmg + ")</b>";
                }
            }

            return msg;
        }
    },

    "sharp-face": {
        name: "sharp-face",
        full_name: "Ice Sharp Face",
        _type: "magic",
        m_type: "water",
        title: "Наносит физ. урон",
        hint: "Наносит физ. повреждение. Игнорирует защиту от урона",
        reload_time: 1,
        reloading: 1,
        is_used: false,
        mana_cost: 200,
        base_dmg: 200,

        use: function(player, id){

            let used_magic = player.magics[id];

            if(!checkWitchcraft(player)){
                alert("Достигнут придел каста за ход !");

                return;
            }

            if(used_magic.reloading === 0 && used_magic.is_used === true){
                used_magic.reloading = used_magic.reload_time;
                used_magic.is_used = false;
            }

            if(used_magic.is_used){
                alert("Уже была использована !");
            }

            let target = getTarget();

            if(target === undefined){
                alert("Цель не определена");
            }
            else{
                let target_unit = JSON.parse(localStorage.getItem(target));

                let dmg = getMagicalDamage(used_magic.base_dmg,
                    player.name,
                    target_unit.name,
                    used_magic.m_type,
                    is_physical = true
                );

                player.mana -= used_magic.mana_cost;
                target_unit.health -= dmg.dmg;

                if(dmg.is_crit){
                    log.push("<hr />Игрок <b style='color: #0054a2'>" + player.name +
                        "</b> использовал <b style='color: deepskyblue'>" + used_magic.full_name +
                        "</b> на <b style='color: #0054a2'>" + target_unit.name +
                        "</b> и нанес <b>" + dmg.dmg + "</b>" +
                        "<b style='color: red'> критического</b> урона");
                }
                else{
                    log.push("<hr />Игрок <b style='color: #0054a2'>" + player.name +
                        "</b> использовал <b style='color: deepskyblue'>" + used_magic.full_name +
                        "</b> на <b style='color: #0054a2'>" + target_unit.name +
                        "</b> и нанес <b>" + dmg.dmg + "</b> урона");
                }

                used_magic.is_used = true;

                player.magics[id] = used_magic;

                player.reload[used_magic.name] = used_magic;
                player.witchcraft.used += 1;

                localStorage.setItem("Log", JSON.stringify(log));
                localStorage.setItem(target_unit.name, JSON.stringify(target_unit));
                localStorage.setItem(player.name, JSON.stringify(player));
            }
        },

        magic_reload: function(player, magic){

            magic.reloading -= 1;

            if(magic.reloading === 0){
                magic.reloading = magic.reload_time;
                magic.is_used = false;

                player.magics.forEach((el, index) => {
                    if(el.name === magic.name){
                        player.magics[index] = magic;
                    }
                });
            }
        }
    },

    "magic-shield": {
        name: "magic-shield",
        _type: "magic",
        title: "Снижает любой наносимый урон",
        hint: "Поглощает большую часть урона",
        reload_time: 4,
        reloading: 4,
        is_used: false,
        mana_cost: 200,
        base_dmg: 0,
        m_type: "water",

        use: function(player, id){

            let used_magick = player.magics[id];

            if(!checkWitchcraft(player)){
                alert("Достигнут придел каста за ход !");

                return;
            }

            if(used_magick.reloading === 0 && used_magick.is_used === true){
                used_magick.reloading = used_magick.reload_time;
                used_magick.is_used = false;
            }

            if(used_magick.is_used){
                alert("Уже была использована !");
            }

            else{
                alert("Магический щит !");

                used_magick.is_used = true;

                player.magics[id] = used_magick;

                player.reload[used_magick.name] = used_magick;
                player.witchcraft.used += 1;

                localStorage.setItem("Log", JSON.stringify(log));
                //localStorage.setItem(target_unit.name, JSON.stringify(target_unit));
                localStorage.setItem(player.name, JSON.stringify(player));
            }
        },

        magic_reload: function(player, magic){

            magic.reloading -= 1;

            if(magic.reloading === 0){
                magic.reloading = magic.reload_time;
                magic.is_used = false;

                player.magics.forEach((el, index) => {
                    if(el.name === magic.name){
                        player.magics[index] = magic;
                    }
                });
            }
        }
    },

    "mana-shield": {
        name: "mana-shield",
        _type: "magic",
    },

    "warmth": {
        name: "warmth",
        _type: "magic",
    }
};

var log = [];

//
//Функция взятия цели ...
//Для приёмов и магии
function getTarget(){
    let target = prompt("Укажите цель: ").toString().toLowerCase();

    let session = JSON.parse(localStorage.getItem("session"));

    if(session.bot.toLowerCase() !== target){
        return;
    }

    target = session.bot;

    return target;
}

//
//Функция для получения списка доспуных Персонажей для Битвы.
//Возвращает строку значений...
//
function getAvailableUnitList(){

	let list = "";
	let unit;

	for(unit in players){
		list += "[" + unit + "] ";
	}

	return list;
}

//
//Функция проверки коректности имени...
//... и наличия в списке игроков ...
//Возвращает true если Данные введены корректно и игрок есть в БД... иначе false...
function checkPlayer(name){

    if(name && ((name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()) in players)){
        return true;
    }

    return false;
}

//
//Интерфейс ввода...
//Функция для выбора игровых персонажей, проверка на правильность и т.д.
//Возвращает ОБЬЕКТ с именами Игрока и Бота...
function playerLogin(){

    let used_unit;
    let player_name = prompt("Выберите игрока: " + getAvailableUnitList(), "");

    if(checkPlayer(player_name)){
        player_name = player_name.charAt(0).toUpperCase() + player_name.slice(1).toLowerCase();

        used_unit = player_name;
    }
    else{
        alert("Такой Игрок не катит... =(");

        restartGame();

        return;
    }

    let bot_name = prompt("Выберите бота: " + getAvailableUnitList(), "");

    if(checkPlayer(bot_name)){
        bot_name = bot_name.charAt(0).toUpperCase() + bot_name.slice(1).toLowerCase();

        if(bot_name === used_unit){
            alert("Вы заняли етот юнит !!! Перезагружаю...");

            restartGame();

            return;
        }
    }
    else{
        alert("Такой Бот не катит... =(");

        restartGame();

        return;
    }

    return {
        "player": player_name.toString(),
        "bot": bot_name.toString()
    };
}

//
//Main...
$(document).ready(function(){
    var session = {"player": "", "bot":""};

    var data = JSON.parse(localStorage.getItem("session"));

    var name1 = "";
    var name2 = "";

    if(data){
        name1 = data.player;
        name2 = data.bot;
    }
    else{
        var units = playerLogin();

        name1 = units.player;
        name2 = units.bot;

        session.player = name1;
        session.bot = name2;

        localStorage.setItem("session", JSON.stringify(session));
    }

    if(JSON.parse(localStorage.getItem(name2)) === null || JSON.parse(localStorage.getItem(name1)) === null){

        let player = loadUnitParams(players[name1]);
        let bot = loadUnitParams(players[name2]);

        localStorage.setItem(name1, JSON.stringify(player));
        localStorage.setItem(name2, JSON.stringify(bot));
        localStorage.setItem("Log", JSON.stringify(log));
    }

    //Отображение на страницу...
    loadPlayer(name1, "pl");
    loadPlayer(name2, "en");
    loadFightLog();
});


//
//Функция подгрузки параметров игрока... ----Частично.... В Процесе...
//
function loadUnitParams(player){

    //Загрузка уровня здоровья...
    player.health = getHealthMaxLevel(player.str, player.hel);
    player.mana = getManaMaxLevel(player.wdm);

    //Загрузка возможности каста и его количества
    player = setWitchcraftCount(player);

    //Загрузка защиты от магии...
    player = setMagicalProtection(player);

    //Загрузка защиты от урона...
    player = setProtectionFromDamage(player);

    //Загрузка Магического Крита
    player = setMagicCriticalLevel(player);

    //Загрузка Инвентаря...
    player = loadUnitInventory(player);

    //Загрузка Приёмов/Магии
    player = loadUnitStrokeAndMagic(player);

    return player;
}

//
//Загрузка инвентаря для отображения...
//
function loadUnitInventory(player){
    //Загрузка инвентаря...
    let stock_list = player.stock_list;

    if(stock_list){
        stock_list.forEach((el, index) => {
            let item = stock_db[el];

            player.stock.push(item);
        });
    }

    return player;
}

//
//Загрузка Приёмов/Магии для отображения...
//
function loadUnitStrokeAndMagic(player){
    //Загрузка прийомов и магий...
    let magick_list = player.magic_list;

    if(magick_list){
        magick_list.forEach((el, index) => {
            let item = magic_db[el];

            player.magics.push(item);
        });
    }

    return player;
}

//
//Функция подгрузки и ОТОБРАЖЕНИЯ даных игрока и бота из хранилища на страницу
//
function loadPlayer(player, status){

    var area = "";
    var id_prefix = "";

    const unit = JSON.parse(localStorage.getItem(player));

    if(status === "pl"){
        console.log("Player loading !!!");

        area = "player-container";
        id_prefix = "u-";

        showPlayerStock(unit);
        showPlayerMagic(unit);
    }
    else{
        console.log("Bot loading !!!");

        area = "enemy-container";
        id_prefix = "e-";
    }

    $("div#" + id_prefix + "name").html(unit.name);
    $("div#" + id_prefix + "lvl").html("[" + unit.lvl + "]");

    loadHpMpLevel(unit, status);

    log = JSON.parse(localStorage.getItem("Log"));
}

//
//Функция ОТОБРАЖЕНИЯ на странице вспомагательного инвентаря..
//
function showPlayerStock(unit){

    if(unit.stock){
        unit.stock.map((item, index) => {

            index += 1;

            if(!item.is_used){
                let res = $("td#stock-" + index + " > img#st-" + index);

                res.attr("src", "img/" + item.name + ".gif");
                res.attr("name", item.name);
                res.attr("id", index);
                res.attr("title", item.title.toString());

                res.bind("click", (e) => {
                    let used_item = {
                        name: e.target.name,
                        id: e.target.id
                    }

                    stock_db[used_item.name].use(unit, used_item.id);
                    location.reload();
                });
            }
        });
    }
}

//
//Функция ОТОБРАЖЕНИЯ на странице приёмов и магии...
//
function showPlayerMagic(unit){

    if(unit.magics){
        let target_table = $("table#magic-list").append($("<tr>"));

        unit.magics.map((item, index) => {
            if(!item.is_used) {
                $(target_table).append(
                    $("<td>").append(
                        $("<img>")
                            .attr("src", "img/" + item.name + ".gif")
                            .attr("id", index)
                            .attr("name", item.name)
                            .attr("class", "stock")
                            .bind("click", (e) => {
                                let used_magic = {
                                    name: e.target.name,
                                    id: e.target.id
                                }

                                magic_db[used_magic.name].use(unit, used_magic.id);
                                location.reload();
                            })
                    ).attr("id", "magic-" + index).attr("class", "stock")
                );
            }
        });
    }
}

//
//Функция анимации Уровня ХП и МП
//
function loadHpMpLevel(unit, status){

    let current_hp = unit.health;
    let max_hp = getHealthMaxLevel(unit.str, unit.hel);

    let current_mp = unit.mana;
    let max_mp = getManaMaxLevel(unit.wdm);

    let hp_diff = getPercentDiff(max_hp, current_hp);
    let mp_diff = getPercentDiff(max_mp, current_mp);

    let target = "";
    if(status === "pl"){
        target = "player";
    }
    else{
        target = "enemy";
    }

    if (100 - hp_diff <= 60){
        $("div#" + target + "-hp-level-line").css({"background": "#ffaa00"});
    }
    if (100 - hp_diff <= 30){
        $("div#" + target + "-hp-level-line").css({"background": "#ff0000"});
    }

    $("div#" + target + "-hp-level-line").css({"width": 100 - hp_diff + "%"});
    $("div#" + target + "-hp-level-text").text(current_hp + "/" + max_hp);

    $("div#" + target + "-mp-level-line").css({"width": 100 - mp_diff + "%"});
    $("div#" + target + "-mp-level-text").text(current_mp + "/" + max_mp);

    $("img#" + target + "-main-image").bind("mouseover", function (e){

        let hint_div = document.createElement("div");

        hint_div.id = "player-hint";
        hint_div.style.position = "absolute";
        hint_div.style.width = "115px";
        hint_div.style.height = "135px";
        hint_div.style.left = e.pageX;
        hint_div.style.top = e.pageY;
        hint_div.style.color = "black";
        hint_div.style.background = "white";
        hint_div.style.fontSize = "12px";
        hint_div.style.lineHeight = "2px";
        hint_div.style.padding = "10px 2px";

        hint_div.innerHTML = "<p>Сила: " + unit.str +
            "</p><p>Ловковсть: " + unit.agi +
            "</p><p>Интуиция: " + unit.int +
            "</p><p>Выносливость: " + unit.hel +
            "</p><p>Интелект: " + unit.itl +
            "</p><p>Мудрость: " + unit.wdm +
            "</p><p>Духовность: " + unit.spr +
            "</p>";

        $("body").append(hint_div);
    });

    $("img#" + target + "-main-image").bind("mouseout", function (){
        $("div#player-hint").remove();
    });
}

//
//Функция опредиления разницы между числами в %
//
function getPercentDiff(max, min){

    return parseInt(100 * (max - min)/max);
}

//
//Функция вычисления уровня здоровья игрока...
//Формула: (Кол-во силы * фикс-е значение) + (Кол-во здоровья * фикс-е значение)
//Фиксирование значения задаються в функции...
function getHealthMaxLevel(s_str, s_hel){

	let str = parseInt(s_str);
	let hel = parseInt(s_hel);

	//Бонусный процент ХП за коли-во единиц Выносливости
	let bonus_percent = 0;
	if(hel >= 50){
		bonus_percent += parseInt(hel / 50) * 5;
	}

    //Кол-во единиц выносливости за 1ед. ХП
    let hel_add_points = 23;
    //Кол-во единиц выносливости за 1ед. Силы
    let str_add_points = 13;

    let health_lvl = parseInt(hel * hel_add_points + str * str_add_points);
    let bonus_hp_lvl = parseInt(health_lvl * bonus_percent / 100);

    return String(health_lvl + bonus_hp_lvl);
}

//
//Функция вычисления уровня маны игрока...
//Формула: (Кол-во интелекта * фикс-е значение) + Бонусы за кол-во интелекта
//Константы задаются в функции...
function getManaMaxLevel(s_wdm){

    let wdm = parseInt(s_wdm);

    let mp_add_point = 13;

    return String(wdm * mp_add_point);
}

//
//Функция подсчета уровня уворота у игрока
//Формула: (Кол-во ловкости * фикс-ное значение)
//Значение задается в функции
function getEvasionLevel(agi){

    let agi_c = parseInt(agi);

    if(agi_c <= 0){
        return 0;
    }

    //Кол-во очков уворота за 1 ед. Ловкости
    let add_points = 1;
    if(agi_c >= 25){
        add_points += parseInt(agi_c / 25) * 1;
    }

    if(agi_c >= 50){
        add_points += parseInt(agi_c / 50) * 1;
    }

    if(agi_c >= 100){
        add_points += parseInt(agi_c / 100) * 3;
    }
    //Бонус в процентах к увороту за каждые N Ловкости
    let percent_bonus = parseInt(agi_c / 25) * 10;

    let evasion_lvl = agi_c * add_points;

    return parseInt(evasion_lvl + parseInt(evasion_lvl * percent_bonus / 100));
}

//
//Функция подсчета уровня антиуворота
//Формула: (Кол-во интуиции * фикс-ное значение)
//Значение задается в функции
function getAntiEvasionLevel(agi){

    let agi_c = parseInt(agi);

    if(agi_c <= 0){
        return 0;
    }
    //Кол-во очков антиуворота за 1ед. Ловкости
    let add_points = 17;

    let anti_ev_lvl = agi_c * add_points;

    return parseInt(anti_ev_lvl);
}

//
//Функция вычисления уровня крита
//Формула:(Кол-во интуиции * фикс-е значение)
//Значение задается в функции
function getCriticalLevel(int){

    let int_c = parseInt(int);

    if(int_c <= 0){
        return 0;
    }

    //Кол-во очков крита за 1ед. Интуиции
    let add_points = 1;
    if(int_c >= 25){
        add_points += parseInt(int_c / 25) * 1;
    }

    if(int_c >= 50){
        add_points += parseInt(int_c / 50) * 2;
    }

    if(int_c >= 100){
        add_points += parseInt(int_c / 100) * 4;
    }

    //Бонус в процентах к криту за каждые N Интуиции
    let percent_bonus = parseInt(int_c / 25) * 10;

    let critical_lvl = int_c * add_points;

    return parseInt(critical_lvl + parseInt(critical_lvl * percent_bonus / 100));
}

//
//Функция подсчета уровня антикрита
//Формула:(Кол-во ловкости * фикс-е значение)
//Значение задается в функции
function getAntiCriticalLevel(int){

    let int_c = parseInt(int);

    if(int_c <= 0){
        return 0;
    }
    //Кол-во очков антикрита за 1ед. Интуиции
    let add_points = 13;

    let anti_crt_lvl = int_c * add_points;

    return parseInt(anti_crt_lvl);
}

//
//Функция установки количества прокаста за один ход ...
//Зависти от уровня мудрости.... Каждые N мудрости +1 каст
//
function setWitchcraftCount(player){

    //Кол-во мудрости
    let wdm_c = parseInt(player.wdm);
    //Каждые ... мудрости +1 каст...
    let wdm_N_points = 50;

    if(wdm_c > 0){
        player.witchcraft.max = 1;
    }

    if(wdm_c >= 50){
        player.witchcraft.max += parseInt(wdm_c / wdm_N_points);
    }

    return player;
}

//
//Функция проверки возможности каста.
//Проверка на достижение максимума обкаста за ход.
function checkWitchcraft(player){

    return player.witchcraft.used < player.witchcraft.max;
}

//
//Функция подсчета и установки базового процента магического крита
//Формула: (Кол-во интелекта * N) + Бонусы за 100 интуиции
//
function setMagicCriticalLevel(player){
    let itl_c = parseInt(player.itl);
    //Процент маг. крита за 1 интелект
    let itl_add_points = 0.1;

    let percent = parseInt(itl_c * itl_add_points);

    if(itl_c >= 100){
        percent += parseInt(itl_c / 100) * 5;
    }

    let base_critical_lvl = player.magic_crit_lvl;
    if(base_critical_lvl >= 100 || base_critical_lvl + percent >= 100){
        percent = 99;
    }

    player.magic_crit_lvl += percent;

    return player;
}

//
//Функция подсчета и получения базового уворота от магии
//Каждые N ед. защиты от магии +1% уворота
function getMagicDodge(player, m_type){
    //Базовый % уворота
    let base_dodge = player.magic_dodge;
    //Константа для определения процента...
    let N = 100;

    //Профильная маг. защита
    let m_prot = player.anti_magic_protect[m_type];
    base_dodge += parseInt(m_prot / N) * 1; // 1% за каждые N ед. защиты

    return base_dodge;
}

//
//Функция подсчета уровня регенерации здоровья в бою
//Формула:(Кол-во силы / фикс-е значение силы) * Кол-во прибавляемых поинтов
//Значения задаются в функции...
function getHealRegenerationLevel(player){

    let str_count = 5;
    let add_points = 2;

    let percent_for_hel_level = (parseInt(player.hel / 50) + 1) * 10;
    let bonus_hp = parseInt((parseInt(player.str) / str_count) * add_points);

    return parseInt(bonus_hp + (bonus_hp * percent_for_hel_level / 100));
}

//
//Функция подсчета уровня регенерации маны в бою
//Формула:(Кол-во мудрости / фикс-е значение силы) * Кол-во прибавляемых поинтов
//Значения задаются в функции...
function getManaRegenerationLevel(player){

    let wdm = parseInt(player.wdm);
    let add_point = 2;

    let percent_wdm_lvl = 0;

    if(wdm >= 50){
        percent_wdm_lvl += parseInt(wdm / 50) * 10;
    }

    let regen_lvl = parseInt(wdm / 7) * add_point;

    return parseInt(regen_lvl + (regen_lvl * percent_wdm_lvl / 100));
}

//
//Функция подсчета силы крит-удара
//Формула: (Урон + % от урона)
//Проценты задаются в функции
function getCriticalDamage(player, dmg){

    let int_c = parseInt(player.int);

    var percent_of_crit_power = 100;
    //percent_of_crit_power += parseInt(int_c / 4);

    //Бонус крита и силы крита за инту...
    if(int_c >= 25){
        percent_of_crit_power += parseInt(int_c / 25) * 15;
    }
    if(int_c >= 50){
        percent_of_crit_power += parseInt(int_c / 50) * 20;
    }

    if(int_c >= 100){
        percent_of_crit_power += parseInt(int_c / 100) * 25;
    }

    return parseInt(dmg + (dmg * percent_of_crit_power / 100));
}

//
//Функция подсчета процента бонусной защиты.
//Формула: Процент защиты = ((Кол-во выносливости / 50) + 1) * 10 ---> %%%
//         Полученный урон - Процент защиты
function getBonusProtect(player, dmg){

    if(dmg === 0 || dmg <= 0){
        return 0;
    }

    let percent_for_hel_level = 0;

    if(parseInt(player.hel) >= 50){
        percent_for_hel_level += parseInt(parseInt(player.hel) / 50) * 10;
    }

    let bonus = parseInt(dmg * percent_for_hel_level / 100);

    return dmg - bonus;
}

//
//Функция подсчета бонусного урона.
//Формула: Процент урона = ((Кол-во силы / 50) + 1) * 10 ---> %%%
//Нанесенный урон + Процент урона
function getBonusDamage(player, dmg){

    if(dmg <= 0){
        return 1;
    }

    let percent_for_str_level = 0;
    //Бонус урона за каждые 25 ед. силы
    if(parseInt(player.str) >= 25){
    	percent_for_str_level += parseInt(parseInt(player.str) / 25) * 3;
    }

    //Бонус урона за каждые 50 ед. силы
    if(parseInt(player.str) >= 50){
        percent_for_str_level += parseInt(parseInt(player.str) / 50) * 7;
    }
    //Бонус урона за каждые 100 ед. силы
    if (parseInt(player.str) >= 100){
        percent_for_str_level += parseInt(parseInt(player.str) / 100) * 12;
    }

    let bonus = parseInt(dmg * percent_for_str_level / 100);

    return dmg + bonus;
}

//
//Функция рандомного(если установлено для игрока) выброса ударов
//Возвращает масив ударов
function getStrokeArea(stroke_count, random_stroke=true){

    let strokes = [];

    if(random_stroke){
        for(let i = 0; i < stroke_count; i++){
            strokes.push(getRandomArbitrary(1, 5));
        }
    }
    else{
        strokes.push(
            parseInt($("input:radio[name='first-strike']:checked").val()));
        strokes.push(
            parseInt($("input:radio[name='second-strike']:checked").val()));
    }

    return strokes;
}

//
//Функция рандомного(если установлено для игрока)выброса блоков
//Возвращает масив блоков
function getProtectionArea(prot_count, random_protect=true){

    let protection = [];
    let base_protection = 0;

    if(random_protect){
        base_protection = getRandomArbitrary(1, 5);
    }
    else{
        base_protection = parseInt(
            $("input:radio[name='protect']:checked").val()
        );
    }

    protection.push(base_protection);

    for(let i = 0; i < prot_count - 1; i++){
        let new_prot_zone = ++base_protection;

        if(new_prot_zone === 6){
            protection.push(1);
        }
        else if(new_prot_zone === 7){
            protection.push(2);
        }
        else{
            protection.push(new_prot_zone);
        }
    }

    return protection;
}

//
//Функция УСТАНОВКИ Защиты от Урона...
//Защита от урона - Кол-во единиц за выносливость + Устиановленая по умолчанию + от шмота и т.д.
function  setProtectionFromDamage(player){

    let p_hel = parseInt(player.hel);
    //Кол-во единиц за 1 ед. выноса
    let hel_add_point = 1.5;

    let dmg_protection = parseInt(p_hel * hel_add_point);

    //Установка защиты от урона на игрока/бота
    player.damage_protect.full_protect += dmg_protection;

    return player;
}

//
//Функция получения Защиты от УРОНА....
//Защита от урона - фиксированная, можно получить из шмота, обкаста еликсиров и т.д.
//
function getProtectionFromDamage(target){

    return parseInt(target.damage_protect.full_protect);
}

//
//Функция для нахождения ко-ва попаданий по цели.
//На вход -> Масив ударов + Масив блоков.
//Если елементы ма-ва ударов не входят в ма-в блоков - попадание!
//Возвращает ко-во попаданий
function getHitCount(strokes, blocks){

    let hit_count = 0;

    strokes.forEach(function(el, idx){
        if(blocks.indexOf(el) === -1){
            hit_count++;
        }
    });

    return hit_count;
}

//
//Вспомогательная функция для Лога боя !
//Корректный текстовый вывод Точек удара...
function printStrokes(strokes){

    let attack_zone = {
        1: "Голова",
        2: "Корпус",
        3: "Живот",
        4: "Пояс",
        5: "Ноги",
        6: "Голова",
    };

    let strokes_str = "";

    strokes.forEach(function(el, index){
        if(el in attack_zone){
            strokes_str += attack_zone[el];

            if(index < (strokes.length - 1)){
                strokes_str += ' ';
            }
        }
    });

    return strokes_str;
}

//
//Вспомогательная функция для Лога боя !
//Корректный текстовый вывод Зон блока...
function printBlocks(blocks){

    let protection_zone = {
        1: "Голова",
        2: "Корпус",
        3: "Живот",
        4: "Пояс",
        5: "Ноги",
        6: "Голова",
    };

    let blocks_str = "";

    blocks.forEach(function(el, index){
        if(el in protection_zone){
            blocks_str += protection_zone[el];

            if(index < blocks.length - 1){
                blocks_str += ' ';
            }
        }
    });

    return blocks_str;
}

//
//Вспомагательная функция выбрасывания рандомного числа в промежутке min - max
//Для функций крита, уворота и т.д.
function getRandomArbitrary(min, max){

    let random = min - 0.5 + Math.random() * (max - min + 1);

    return Math.round(random);
}

//
//Функция очистки данных.
//
function clearData(arrUnits){

    arrUnits.forEach(function(unit){
        localStorage.removeItem(unit.name);
    });

    localStorage.removeItem("Log");
    localStorage.removeItem("session");

    location.reload();
}

//
//Функция расчета Урона
//По формуле: Рандом между ((Уровень силы * N), (Уровень силы * M))
function getDamage(player){

    //Базовый Урон - зависящий только от силы.
    //Мин. (Сила * N), Макс. (Сила * M)
    let Bmin_dmg = player.str * 2;
    let Bmax_dmg = player.str * 2.5;

    //Урон от оружия (Минимальный, Максимальный)
    let Weap_min_dmg = 0;
    let Weap_max_dmg = 0;

    //Мастерство владения оружием
    let Mastery_wep_lvl = 0;

    //Дополнительный урон от Типа Атаки(Колющий, Режущий, Рубящий, Дробящий)
    let Dmg_by_type = 0;

    //Расчет минимального и максимального урона. Зависит от Силы, Урона оружия...
    //Мастерства владения, Типа урона
    let minDmg = (Bmin_dmg + Weap_min_dmg * (1 + 0.1 * Mastery_wep_lvl)) * (1 + Dmg_by_type / 100);
    let maxDmg = (Bmax_dmg + Weap_max_dmg * (1 + 0.1 * Mastery_wep_lvl)) * (1 + Dmg_by_type / 100);

    return getRandomArbitrary(minDmg, maxDmg);
}

//
//Функция расчета магического урона
//Зависит от кол-ва интелекта, уровня скила магии, % усиления магии, и защиты от магии у противника
function getMagicalDamage(base_dmg, owner, target, magic_type, is_physical=false){

    //Получение объектов Игрока и Бота
    let player = JSON.parse(localStorage.getItem(owner));
    let bot = JSON.parse(localStorage.getItem(target));

    //alert(base_dmg + " " + player + " " + target + " " + magic_type);

    //Бонус урона за интелект в процентах...
    let itl_bonus_dmg = parseInt(parseInt(player.itl) * 0.5);
    //Бонус урона за Навык владения целевой магией в процентах...
    let skill_bonus_dmg = player.magic_skill_lvl[magic_type] * 10;
    //Бонус от мощи магии в процентах...
    let power_bonus_dmg = player.magic_power_lvl[magic_type];
    //Защита противника от целевой магии в единицах...
    let target_m_protection = bot.anti_magic_protect[magic_type];
    //Общий процент урона...
    let total_power_percent = itl_bonus_dmg + skill_bonus_dmg + power_bonus_dmg;

    if(is_physical){
        target_m_protection = 0;
    }

    let dmg = (base_dmg + (parseInt(base_dmg * total_power_percent / 100))) - target_m_protection;

    //Проверка на шанс Крита/Установка крит. урона (х2 урона)
    let m_crit_chance = player.magic_crit_lvl;
    let is_crit = false;

    if(__isALuck(m_crit_chance)){
        dmg *= 2;
        is_crit = true;
    }

    //Минимальный магический урон - 1 ед.
    if(dmg <= 0){
        dmg = 1;
    }

    return {
        dmg: dmg,
        is_crit: is_crit
    }
}

//
//Функция УСТАНОВКИ Защиты от магии...
//Общая защита от магии = Базовая(Указаная админом) + Защита от Выносливости + Защита от шмота и т.д.
//Уровень Выносливости не влияет на защиту от Тьмы и Света
function setMagicalProtection(player){

    //Уровень выноса
    let p_hel = parseInt(player.hel);
    //Кол-во очков защиты за 1 ед. выносливости
    let hel_add_point = 1.5;

    //Устанавливаем защиту от магии стихий (Установленные по умолчанию + Ед. за выносливость)
    let m_protect = parseInt(p_hel * hel_add_point);

    player.anti_magic_protect.fire += m_protect;
    player.anti_magic_protect.water += m_protect;
    player.anti_magic_protect.air += m_protect;
    player.anti_magic_protect.earth += m_protect;

    return player;
}

//
//Расчет Колющего урона
//Формула: Сила * Бону + Ловкость * Бонус
//Бонусы задаю-ся в функции...
function getPrickingDamage(player){

    let p_str = parseInt(player.str);
    let p_agi = parseInt(player.agi);

    let agi_bonus_dmg = 0.6;
    let str_bonus_dmg = 0.4;

    return parseInt(p_str * str_bonus_dmg + p_agi * agi_bonus_dmg);
}

//
//Расчет Рубящего Урона
//Формула: Сила * Бонус + Ловкость * Бонус + Интуиция * Бонус
//Бонусы задаю-ся в функции...
function getChoppingDamage(player){

    let p_str = parseInt(player.str);
    let p_agi = parseInt(player.agi);
    let p_int = parseInt(player.int);

    let str_bonus_dmg = 0.6;
    let agi_bonus_dmg = 0.2;
    let int_bonus_dmg = 0.2;

    return parseInt(p_str * str_bonus_dmg + p_agi * agi_bonus_dmg + p_int * int_bonus_dmg);
}

//
//Расчет Дробящего Урона
//Формула: Сила * Бонус
//Бонус задаеться в функции...
function getCrushingDamage(player){

    let p_str = parseInt(player.str);

    let str_bonus_dmg = 1;

    return parseInt(p_str * str_bonus_dmg);
}

//
//Расчет Режущего Урона
//Формула: Сила * Бонус + Интуиция * Бонус
//Бонусы задаютсья в функции...
function getCuttingDamage(player){

    let p_str = parseInt(player.str);
    let p_int = parseInt(player.int);

    let str_bonus_dmg = 0.6;
    let int_bonus_dmg = 0.4;

    return parseInt(p_str * str_bonus_dmg + p_int * int_bonus_dmg);
}

//
//Шанс просчета Уворота - отдельно.
//С Возможностью регулировать шанс через бонус.
//Формула: Бонус * (1 - (АнтиУворот / Уворот))
function __getEvasionChance(evasion, anti_evasion, dodge_count){

    let percent = 0;

    if(anti_evasion < evasion){
        percent = (evasion - anti_evasion) / evasion * 100;
        percent = 50 + (50 * percent / 100);
    }

    if(evasion < anti_evasion){
        percent = (anti_evasion - evasion) / anti_evasion * 100;
        percent = 50 - (50 * percent / 100);
    }

    if(anti_evasion === evasion){
        percent = 50;
    }

    //Ограничение на уворот!!!
    let max_evasion_chance = 95.00;
    if(percent > max_evasion_chance){
        percent = max_evasion_chance;
    }

    //С каждым сл. уворотом шанс падает на 13%
    if(dodge_count > 0){
        percent -= 13;

        if(percent <= 0)
            percent = 0;
    }

    percent = parseFloat(percent.toFixed(2));
    //alert("Процент уворота: " + percent);
    return percent;
}

//
//Шанс просчета Крита - отдельно.
//С Возможностью регулировать шанс через бонус.
//Формула: Бонус * (1 - (АнтиКрит / Крит))
function __getCriticalChance(critical, anti_critical){

    let percent = 0;

    if(anti_critical < critical){
        percent = (critical - anti_critical) / critical * 100;
        percent = 50 + (50 * percent / 100);
    }

    if(anti_critical > critical){
        percent = (anti_critical - critical) / anti_critical * 100;
        percent = 50 - (50 * percent / 100);
    }

    if(anti_critical === critical){
        percent = 50;
    }

    //Ограничение на крит!!!
    let max_crit_chance = 85.01;
    if(percent > max_crit_chance){
        percent = max_crit_chance;
    }

    if(percent <= 0)
        percent = 0;

    percent = parseFloat(percent.toFixed(2));
    //alert("Процент крита: " + percent);
    return percent;
}

//
//Функция просчета контрудара...
//Контрудар наступает только после уорота
function getCounterAttack(player, counter_punch_count){

    //Не больше 2 контрудара...
    if(counter_punch_count >= 2){
        return false;
    }
    //По N% за 1 ловкости
    let percent_ca = parseInt(parseInt(player.agi) * 0.1);

    //Ограничение - не больше чем 50 % на контрудар
    if(percent_ca >= 75){
        percent_ca = 75;
    }

    //alert(player.name + " Контрудар: " + percent_ca + "%");
    return __isALuck(percent_ca, "counter");
}

//
//Функция выбрасывания рандома по проценту.
//Передаем процент, кидаем рандомное число, если процент <= - Удача, иначе Нет...
function __isALuck(percent, action){

    let max_random_range = 100;

    //Старый расчет шанса на крит и уворот
    //Можно увеличивать в одну или другую сторону.
    if(action === "dodge"){
        max_random_range = 120;
    }

    if(action === "crit"){
        max_random_range = 150;
    }

    if(action === "counter"){
    	max_random_range = 100;
    }

    let random = getRandomArbitrary(0, max_random_range);

	/*
	//Новый расчет крита - линейный ....
    let random = parseFloat(Math.random().toFixed(4)) * 100;
    //alert("Percent: " + percent + "  Num: " + random);
	*/
    return random <= percent;
}

//
//Функция подгрузки лога в бой.
//Лог достается из хранилища
//Даные кидаются в определенный <div> на странице
function loadFightLog(){

    let log = JSON.parse(localStorage.getItem("Log"));

    log.forEach(function(el){
        $("div#log > div#text-area").prepend("<p>" + el + "</p>");
    });
}

//
//Проверка на рандомные удары для игрока...
//Выставляются флагом в форме в окне Боя.
//
function isRandomMove(){

    let is_random = $("input#random_move").is(":checked");

    return is_random;
}

//
//Функция Проверка и выполнение пассивных еффектов
//
function passiveEffectsActivate(player, log){

    let msg;
    if(player.passive){
        for(var el in player.passive){
            if(player.passive[el]._type === "stock"){
                msg = stock_db[player.passive[el].name].passive(player, el);

                log.push(msg);
            }
            if(player.passive[el]._type === "magic"){
                msg = magic_db[player.passive[el].name].passive(player, el);

                log.push(msg);
            }
        }
    }
}

//
//Функция по перезарядке использованных приёмов и магии...
//
function reloadMagicAndStroke(player, log){
    if(player.reload){
        for(var el in player.reload){
            magic_db[el].magic_reload(player, player.reload[el]);
        }
    }
}

//
//Функция проверки окончания поединка.
//Возможные варианты: Победа игрока, Победа Бота, Ничия.
//В любом случае - даные в Сторе чистятся(clearData()) и все по новой...
//
function checkForFightIsOver(player, bot){

    if( (parseInt(player.health) <= 0) && (parseInt(bot.health) > 0) ){
        alert("Bot Victory !");

        clearData([player, bot]);
    }

    if( (parseInt(bot.health) <= 0) && (parseInt(player.health) > 0) ){
        alert("You Victory !");

        clearData([player, bot]);
    }

    if( (parseInt(player.health) <= 0) && (parseInt(bot.health) <= 0) ){
        alert("DRAW !");

        clearData([player, bot]);
    }
}

//
//Функция для Рестарта Боя .... Если вдруг Баг !
//Завязана на кнопку на странице....
function restartGame(){

    alert("Restarting Game ...");

    localStorage.clear();

    location.reload();
}

//
//Основная функция боя
//Вычисление Блоков, Ударов, Урона, Крита, Ухода и т.д.
//Логирование в Log в хранилище...
function fight(){

    let name1 = JSON.parse(localStorage.getItem("session")).player;
    let name2 = JSON.parse(localStorage.getItem("session")).bot;

    //Загрузка данных игрока и бота...
    let player = JSON.parse(localStorage.getItem(name1));
    let bot = JSON.parse(localStorage.getItem(name2));
    let log = JSON.parse(localStorage.getItem("Log"));

    //checkForFightIsOver(player, bot);

    //Генерация случайных блоков и ударов для Игрока и Бота...
    let user_blocks = getProtectionArea(player.blocks, random_protect=isRandomMove());
    let user_strikes = getStrokeArea(player.strikes, random_stroke=isRandomMove());

    let ubb = user_blocks.slice();
    let ubs = user_strikes.slice();

    let enemy_blocks = getProtectionArea(bot.blocks);
    let enemy_strikes = getStrokeArea(bot.strikes);

    let ebb = enemy_blocks.slice();
    let ebs = enemy_strikes.slice();

    let enemy_evasion_lvl = getEvasionLevel(bot.agi);
    let enemy_anti_evasion_lvl = getAntiEvasionLevel(bot.agi);

    let user_evasion_lvl = getEvasionLevel(player.agi);
    let user_anti_evasion_lvl = getAntiEvasionLevel(player.agi);

    let user_dodge_count = 0;
    let enemy_dodge_count = 0;

    let user_counter_punch = [];
    let enemy_counter_punch = [];

    //Активация пассивных еффектов
    passiveEffectsActivate(player, log);
    passiveEffectsActivate(bot, log);
    reloadMagicAndStroke(player, log);

    //alert("Bot str: " + user_strikes.length);
    //Просчет уворота для Бота...
    for(let i = 0; i <= user_strikes.length; i++){
        //alert("In -" + i);
        let chance = __getEvasionChance(enemy_evasion_lvl, user_anti_evasion_lvl, enemy_dodge_count);

        //alert("Уворот Бота: " + enemy_evasion_lvl + " " + user_anti_evasion_lvl + " " + chance + "%");

        let is_dodge = __isALuck(chance, "dodge");

        if(is_dodge){
            user_strikes.splice(0, 1);
            enemy_dodge_count += 1;

            //Контрудар для Бота...
            if(getCounterAttack(bot, enemy_counter_punch.length)){
                let c_punch = getRandomArbitrary(1, 5);

                enemy_strikes.push(c_punch);
                enemy_counter_punch.push(c_punch);
            }
        }
    }

    //alert("Enem str: " + enemy_strikes.length);
    //Просчет уворота для Игрока...
    for(let i = 0; i <= enemy_strikes.length; i++){
        //alert("In -" + i);
        let chance = __getEvasionChance(user_evasion_lvl, enemy_anti_evasion_lvl, user_dodge_count);

        //alert("Уворот Игр: " + user_evasion_lvl + " " + enemy_anti_evasion_lvl + " " + chance + "%");

        let is_dodge = __isALuck(chance, "dodge");

        if(is_dodge){
            enemy_strikes.splice(0, 1);
            user_dodge_count += 1;

            //Контрудар для Игрока...
            if(getCounterAttack(player, user_counter_punch.length)){
                let c_punch = getRandomArbitrary(1, 5)

                user_strikes.push(c_punch);
                user_counter_punch.push(c_punch);
            }
        }
    }

    //Криты для Бота и Игрока...
    let user_crit_level = getCriticalLevel(player.int);
    let user_anti_crit = getAntiCriticalLevel(player.int);

    let enemy_crit_level = getCriticalLevel(bot.int);
    let enemy_anti_crit = getAntiCriticalLevel(bot.int);

    let user_crit_count = 0;
    let user_crit_through_block = 0;

    let enemy_crit_count = 0;
    let enemy_crit_through_block = 0;

    //Урон для Игрока + Мощь крит-урона...
    let user_dmg = 0;
    for(let i = 0; i < user_strikes.length; i++){

        //Базовый урон для игрока
        let base_dmg = getDamage(player);
        //Защита от урона у Бота
        let target_dmg_protection = getProtectionFromDamage(bot);

        let local_dmg = 0;

        let chance = __getCriticalChance(user_crit_level, enemy_anti_crit);

        //alert("Крит Игр: " + user_crit_level + " " + enemy_anti_crit + " " + chance + "%");

        let is_crit = __isALuck(chance, "crit");

        if(is_crit){
            //Урон игрока = Базовый урон + Бонус силы + Критический урон - Защита от урона у цели
            local_dmg = getBonusDamage(player, getCriticalDamage(player, base_dmg)) - target_dmg_protection;

            if(enemy_blocks.indexOf(user_strikes[i]) >= 0){
                //Если крит попал в блок, урон делим на попалам, - защита от урона у цели...
                local_dmg = parseInt((local_dmg - target_dmg_protection) / 2);

                user_crit_through_block += 1;
            }

            user_crit_count += 1;
            user_dmg += local_dmg;
        }
        else{
            local_dmg = getBonusDamage(player, base_dmg) - target_dmg_protection;

            //Если НЕ Крит и попал в блок - Урон: 0
            if(enemy_blocks.indexOf(user_strikes[i]) >= 0) {
                local_dmg = 0;
            }

            //Если НЕ Крит и попал -> Урон = Базовый урон + Бонус силы
            user_dmg += local_dmg;
        }
    }

    //Урон для Бота + Мощь крит-урона
    let enemy_dmg = 0;
    for(let i = 0; i < enemy_strikes.length; i++){

        //Базовй урон для Бота
        let base_dmg = getDamage(bot);
        //Защита от урона у Игрока
        let target_dmg_protection = getProtectionFromDamage(player);

        let local_dmg = 0;

        let chance = __getCriticalChance(enemy_crit_level, user_anti_crit);

        //alert("Крит Бот: " + enemy_crit_level + " " + user_anti_crit + " " + chance + "%");

        let is_crit = __isALuck(chance, "crit");

        if(is_crit){
            //Урон Бота = Базовый урон + Бонус силы + Критический урон - Защита от урона у цели
            local_dmg = getBonusDamage(bot, getCriticalDamage(bot, base_dmg)) - target_dmg_protection;

            if(user_blocks.indexOf(enemy_strikes[i]) >= 0) {
                //Если крит попал в блок, урон делим на попалам - защита от урона у цели...
                local_dmg = parseInt((local_dmg - target_dmg_protection) / 2);

                enemy_crit_through_block += 1;
            }

            enemy_crit_count += 1;
            enemy_dmg += local_dmg;
        }
        else{
            local_dmg = getBonusDamage(bot, base_dmg) - target_dmg_protection;

            //Если НЕ Крит и попал в блок - Урон: 0
            if(user_blocks.indexOf(enemy_strikes[i]) >= 0){
                local_dmg = 0;
            }

            //Если НЕ Крит и попал - Урон = Базовый урон + Бонус силы
            enemy_dmg += local_dmg;
        }
    }

    //Етап Регенерации...
    let user_old_health = player.health;
    let enemy_old_health = bot.health;

    let user_regen = 0;
    let enemy_regen = 0;

    if(user_old_health < getHealthMaxLevel(player.str, player.hel))
        user_regen = getHealRegenerationLevel(player);

    if(enemy_old_health < getHealthMaxLevel(bot.str, bot.hel))
        enemy_regen = getHealRegenerationLevel(bot);

    //Просчет Бонусной защит(От уровня Силы) - фактически конечный урон... Пока что...
    let u_prot = getBonusProtect(bot, user_dmg);
    let e_prot = getBonusProtect(player, enemy_dmg);

    //Регенерируем ХП
    player.health = user_old_health - e_prot + user_regen;
    bot.health = enemy_old_health - u_prot + enemy_regen;

    //Восстанавливаем ману
    //Игроку....
    if(player.mana && player.mana < getManaMaxLevel(player.wdm)){
        let mana_reg = getManaRegenerationLevel(player);

        if(player.mana <= getManaMaxLevel(player.wdm) - mana_reg){
            player.mana += mana_reg;
        }
        else{
            player.mana = getManaMaxLevel(player.wdm);
        }

        log.push("<b style='color: #0054a2'>" + player.name +
          "</b> восстановил: <b style='color: blue'>+" + mana_reg + "МП</b>"
        );
    }
    //Восстанавливаем ману
    //Боту...
    if(bot.mana && bot.mana < getManaMaxLevel(bot.wdm)){
        let mana_reg = getManaRegenerationLevel(bot);

        if(bot.mana <= getManaMaxLevel(bot.wdm) - mana_reg){
            bot.mana += mana_reg;
        }
        else{
            bot.mana = getManaMaxLevel(bot.wdm);
        }

      log.push("<b style='color: #0054a2'>" + bot.name +
        "</b> восстановил: <b style='color: blue'>+" + mana_reg + "МП</b>"
      );
    }
    //Восстанавливаем кол-во прокастов...
    player.witchcraft.used = 0;
    bot.witchcraft.used = 0;


    //Сохраняем новое состояние игроков в стор
    localStorage.setItem(name1, JSON.stringify(player));
    localStorage.setItem(name2, JSON.stringify(bot));

    //
    //Логирование Боя
    //
    log.push(player.name +
        " Бил:<b>[" + printStrokes(ubs) +
        "]</b> блокировал:<b>[" + printBlocks(ubb) +
        "]</b> Увернулся: <b style='color: blue'>" + user_dodge_count +
        "</b> раз(а)" +
        " Нанес: <b>" + user_counter_punch.length +
        "</b> контрудара в <b>[" + printStrokes(user_counter_punch) + "]</b>"
    );

    if(u_prot > 0){
        if(user_crit_count){
            if(user_crit_through_block){
                log.push("<p style='color: red'>" + player.name +
                    " нанес " + user_crit_count +
                    " крит(а), уроном: <b>" + u_prot +
                    ", </b>(" + user_crit_through_block +
                    " из них пробив блок !!!)</p>"
                );
            }
            else{
                log.push("<p style='color: red'>" + player.name +
                    " нанес " + user_crit_count +
                    " крит(а), уроном: <b>" + u_prot +
                    "</b></p>"
                );
            }
        }
        else{
            log.push(player.name +
                " нанес урон: <b>" + u_prot +
                "</b>"
            );
        }
    }
    else{
        if(enemy_dodge_count){
            log.push(player.name +
                " промахнулся " + enemy_dodge_count +
                " раз !!!"
            );
        }
        else{
            log.push(player.name +
                " попал в блок !!!"
            );
        }
    }

    log.push(bot.name +
        " Бил:<b>[" + printStrokes(ebs) +
        "]</b> блокировал:<b>[" + printBlocks(ebb) +
        "]</b> Увернулся: <b style='color: blue'>" + enemy_dodge_count +
        "</b> раз(а)" +
        " Нанес: <b>" + enemy_counter_punch.length +
        "</b> контрудара в <b>[" + printStrokes(enemy_counter_punch) + "]</b>"
    );

    if(e_prot > 0){
        if(enemy_crit_count){
            if(enemy_crit_through_block){
                log.push("<p style='color: red'>" + bot.name +
                    " нанес " + enemy_crit_count +
                    " крит(а), уроном: <b>" + e_prot +
                    ", </b>(" + enemy_crit_through_block +
                    " из них пробив блок !!!)</p>"
                );
            }
            else{
                log.push("<p style='color: red'>" + bot.name +
                    " нанес " + enemy_crit_count +
                    " крит(а), уроном: <b>" + e_prot +
                    "</b></p>"
                );
            }
        }
        else{
            log.push(bot.name +
                " нанес урон: <b>" + e_prot +
                "</b>"
            );
        }
    }
    else{
        if(user_dodge_count){
            log.push(bot.name +
                " промахнулся " + user_dodge_count +
                " раз !!!"
            );
        }
        else{
            log.push(bot.name +
                " попал в блок !!!"
            );
        }
    }

    if(user_regen > 0){
        let regeneration = "<p style='color: lawngreen'><b>" + player.name +
            "</b> восстановил: <b>" + user_regen +
            "</b></p>";

        log.push(regeneration);
    }
    if(enemy_regen > 0){
        let regeneration = "<p style='color: lawngreen'><b>" + bot.name +
            "</b> восстановил: <b>" + enemy_regen +
            "</b></p>";

        log.push(regeneration);
    }
    log.push("<hr>");

    localStorage.setItem("Log", JSON.stringify(log));

    checkForFightIsOver(player, bot);
}

//
//Функция получения уникального ID для пассивных магий (Что бы наваливать по несколько штук если нужно)
//Шарим по списку активных пассивок, ищем сколько штук, плюсуем 1, добавляем к имени магии
function getUniquePassiveId(player, magic){
    let passive_list = player.passive;

    let counter = 0;
    let new_magic_id = magic.name + "-" + counter.toString();

    for(let el in passive_list){
        if(passive_list[el].name === magic.name){
            while(true){
                counter += 1;

                new_magic_id = magic.name + "-" + counter.toString();

                if(!(new_magic_id in player.passive)){
                    break;
                }
            }
        }
    }

    return new_magic_id;
}