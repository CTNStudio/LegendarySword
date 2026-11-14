import { world, system, ItemStack, CustomComponentParameters } from "@minecraft/server";
import { ActionFormData, ActionFormResponse, MessageFormData, MessageFormResponse, ModalFormData, ModalFormResponse } from "@minecraft/server-ui";

const hy2Tasks= [
{
  source: "hy-q:crafting_table",
  chapter: 0,
  task: 0
},
{
  source: "hy-q:diamond",
  chapter: 0,
  task: 5
}
]

const hy3Tasks= [
  {
    source: "hiddenyears:crafting_table",
    chapter: 0,
    task: 0
  },
  {
    source: "hiddenyears:diamond",
    chapter: 0,
    task: 5
  }
]

const ArticleData = [
{
  article_id: 1,
  length: 16
}
]

const TaskData = [
{
  chapter_id: 1,
  chapter_name: "ls.text.task_group.minecraft",
  chapter_introduction: "ls.text.task_group_introduction.minecraft",
  tasks:[
    {
      task_id: 1,
      task_name: "ls.text.task.crafting_table",
      task_introduction: "ls.text.task_introduction.crafting_table",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:crafting_table",
          count: 1
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:bread",
          count: 3
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 4
        }],
        add_xp: 10
      }
    },
    {
      task_id: 2,
      task_name: "ls.text.task.torch",
      task_introduction: "ls.text.task_introduction.torch",
      need_unlock: false,
      requirement: {
        get_any_items:[{
          item_id: "minecraft:torch",
          count: 4
        },
        {
          item_id: "minecraft:soul_torch",
          count: 1
        },
        {
          item_id: "minecraft:copper_torch",
          count: 1
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:torch",
          count: 6
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 3
        }],
        add_xp: 10
      }
    },
    {
      task_id: 3,
      task_name: "ls.text.task.stone_pickaxe",
      task_introduction: "ls.text.task_introduction.stone_pickaxe",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:stone_pickaxe",
          count: 1
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:torch",
          count: 8
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 3
        }],
        add_xp: 10
      }
    },
    {
      task_id: 4,
      task_name: "ls.text.task.iron_pickaxe",
      task_introduction: "ls.text.task_introduction.iron_pickaxe",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:iron_pickaxe",
          count: 1
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:coal",
          count: 6
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 5
        }],
        add_xp: 15
      }
    },
    {
      task_id: 5,
      task_name: "ls.text.task.water_bucket",
      task_introduction: "ls.text.task_introduction.water_bucket",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:water_bucket",
          count: 1
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:bread",
          count: 3
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 2
        }],
        add_xp: 10
      }
    },
    {
      task_id: 6,
      task_name: "ls.text.task.diamond",
      task_introduction: "ls.text.task_introduction.diamond",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:diamond",
          count: 2
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:diamond",
          count: 3
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 5
        }],
        add_xp: 25
      }
    },
    {
      task_id: 7,
      task_name: "ls.text.task.legendary_nugget",
      task_introduction: "ls.text.task_introduction.legendary_nugget",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "legendary_sword:legendary_nugget",
          count: 1
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:iron_ingot",
          count: 5
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 8
        }],
        add_xp: 30
      }
    }
  ]
},
{
  chapter_id: 2,
  chapter_name: "ls.text.task_group.explore",
  chapter_introduction: "ls.text.task_group_introduction.explore",
  tasks:[
   {
      task_id: 8,
      task_name: "ls.text.task.obsidian",
      task_introduction: "ls.text.task_introduction.obsidian",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:obsidian",
          count: 1
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:iron_ingot",
          count: 4
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 4
        }],
        add_xp: 25
      }
    },
    {
      task_id: 9,
      task_name: "ls.text.task.coin",
      task_introduction: "ls.text.task_introduction.coin",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:emerald",
          count: 3
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 15
        }]
      },
      award: {
        get_items:[
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 5
        }],
        add_xp: 20,
        give_tag: "ls:unlocked_task.10"
      }
    }
  ]
},
{
  chapter_id: 4,
  chapter_name: "ls.text.task_group.science_and_magic",
  chapter_introduction: "ls.text.task_group_introduction.science_and_magic",
  tasks:[
    {
      task_id: 11,
      task_name: "ls.text.task.redstone",
      task_introduction: "ls.text.task_introduction.redstone",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:redstone",
          count: 5
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:bread",
          count: 3
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 3
        }],
        add_xp: 15
      }
    },
    {
      task_id: 12,
      task_name: "ls.text.task.redstone_chip",
      task_introduction: "ls.text.task_introduction.redstone_chip",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "legendary_sword:redstone_chip",
          count: 1
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:bread",
          count: 3
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 3
        }],
        add_xp: 15
      }
    },
    {
      task_id: 13,
      task_name: "ls.text.task.lapis_lazuli",
      task_introduction: "ls.text.task_introduction.lapis_lazuli",
      need_unlock: false,
      requirement: {
        get_all_items:[{
          item_id: "minecraft:lapis_lazuli",
          count: 10
        }]
      },
      award: {
        get_items:[{
          item_id: "minecraft:bread",
          count: 3
        },
        {
          item_id: "legendary_sword:hopeful_coin",
          count: 3
        }],
        add_xp: 15
      }
    }
  ]
},
{
  chapter_id: 3,
  chapter_name: "ls.text.task_group.easter_egg",
  chapter_introduction: "ls.text.task_group_introduction.easter_egg",
  tasks:[
    {
      task_id: 10,
      task_name: "ls.text.task.lucky7",
      task_introduction: "ls.text.task_introduction.lucky7",
      need_unlock: true,
      requirement: {
        get_all_items:[{
          item_id: "legendary_sword:hopeful_coin",
          count: 777
        }]
      },
      award: {
        get_items:[{
          item_id: "legendary_sword:developers_doll_lootbag",
          count: 1
        }],
        add_xp: 100
      }
    }
  ]
}]

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function giveItem(player,typeId,count){
  const inventory=player.getComponent("minecraft:inventory").container;
  let item=new ItemStack(typeId,count);
  let availableSlot=[]
  for(let i=1;i<inventory.size;i++){
    let itemInSlot=inventory.getItem(i);
    if(itemInSlot==undefined){
      availableSlot.push(i);
    }
    else if(itemInSlot.typeId==typeId&&itemInSlot.amount+count<=itemInSlot.maxAmount){
      availableSlot.push(i);
    }
  }
  if(availableSlot.length!=0){
    inventory.addItem(item);
  }
  else{
    let dimension=player.dimension;
    let location={x:player.location.x,y:player.location.y+1,z:player.location.z};
    dimension.spawnItem(item,location);
  }
}

function giveLoot(player,loot){
  const inventory=player.getComponent("minecraft:inventory").container;
  const dimension=player.dimension;
  let availableSlot=[]
  for(let i=1;i<inventory.size;i++){
    let itemInSlot=inventory.getItem(i);
    if(itemInSlot==undefined){
      availableSlot.push(i);
    }
  }
  if(availableSlot.length!=0){
    dimension.runCommand(`loot give ${player.name} loot "${loot}"`);
  }
  else{
    let dimension=player.dimension;
    dimension.runCommand(`loot spawn ${player.location.x} ${player.location.y+1} ${player.location.z} loot "${loot}"`)
  }
}

function showMenuIndex(player){
  let menuPage=new ActionFormData();
  menuPage.title("%ls.text.MenuIndexTitle");
  menuPage.body("%ls.text.MenuIndex.1");
  menuPage.body("%ls.text.MenuIndex.2");
  menuPage.button("%ls.text.menu.tasks","textures/ui/task_menu");
  menuPage.button("%ls.text.menu.articles","textures/ui/article_menu");
  menuPage.divider();
  menuPage.button("%ls.text.menu.copyright","textures/ui/copyright_menu");
  menuPage.button("%ls.text.menu.update","textures/ui/update_menu");
  menuPage.show(player).then((response)=>{
    if(response.canceled) return;
    switch(response.selection){
      case 0:
        showTasksIndex(player);
        break;
      case 1:
        articleIndex(player);
        break;
      case 2:
        copyright(player);
        break;
      case 3:
        update(player);
        break;
    }
  })
}

function copyright(player){
  let copyrightPage=new ActionFormData();
  copyrightPage.title("%ls.text.menu.copyright");
  let copyrightBody={
    rawtext:[]
  }
  for(let i=1;i<=34;i++){
    copyrightBody.rawtext.push({translate:`%ls.text.copyright.${i}`},{text: "\n"})
  }
  copyrightPage.body(copyrightBody);
  copyrightPage.button("%ls.text.return_to_menu");
  copyrightPage.show(player).then((response)=>{
    if(response.canceled) return;
    showMenuIndex(player);
  })
}

function update(player){
  let updatePage=new ActionFormData();
  updatePage.title("%ls.text.menu.update");
  let updateBody={
    rawtext:[]
  }
  for(let i=1;i<=10;i++){
    updateBody.rawtext.push({translate:`%ls.text.update.${i}`},{text: "\n"})
  }
  updatePage.body(updateBody);
  updatePage.button("%ls.text.return_to_menu");
  updatePage.show(player).then((response)=>{
    if(response.canceled) return;
    showMenuIndex(player);
  })
}

function articleIndex(player){
  let articleIndexPage=new ActionFormData();
  articleIndexPage.title("%ls.text.articlesTitle");
  articleIndexPage.button("%ls.text.return_to_menu");
  const length=ArticleData.length;
  let unlocked_article=[];
  for(let i=0;i<length;i++){
    let articleId=ArticleData[i].article_id;
    if (player.hasTag(`ls:unlocked_article.${articleId}`)){
      unlocked_article.push(articleId);
      articleIndexPage.button(`%ls.text.article.${articleId}.title`)
    } 
  }
  if(unlocked_article.length==0) articleIndexPage.body("%ls.text.no_articles")
  else articleIndexPage.body("%ls.text.articles");
  articleIndexPage.show(player).then((response)=>{
    if(response.canceled) return;
    if (response.selection==0) showMenuIndex(player)
    else{
      let articleId=unlocked_article[response.selection-1]-1;
      let article=ArticleData[articleId];
      showArticle(player,article);
    }
  })
}

function showArticle(player,article){
  let ArticlePage=new ActionFormData();
  ArticlePage.title(`%ls.text.article.${article.article_id}.title`);
  let articleBody={
    rawtext:[]
  }
  for(let i=1;i<=article.length;i++){
    articleBody.rawtext.push({translate:`%ls.text.article.${article.article_id}.${i}`},{text: "\n"})
  }
  ArticlePage.body(articleBody);
  ArticlePage.button("%ls.text.return_to_menu");
  ArticlePage.show(player).then((response)=>{
    if(response.canceled) return;
    showMenuIndex(player);
  })
}

function showImportTask(player){
  let importTaskPage=new ModalFormData();
  const sourceList=["%ls.text.importHy3","%ls.text.importHy2"];
  const source=new Map();
  source.set(0,hy3Tasks);
  source.set(1,hy2Tasks);
  importTaskPage.title("%ls.text.importTask");
  importTaskPage.dropdown(
    "%ls.text.importTaskSource",
    sourceList,
    {tooltip: "%ls.text.importTaskLimitWarn"}
  );
  importTaskPage.toggle("%ls.text.importTaskAutoClaim", {
    defaultValue: true
  });
  importTaskPage.submitButton("%ls.text.submitImportTask")
  importTaskPage.show(player).then((response)=>{
    if(response.canceled) return;
    const [sourceId,autoClaim]=response.formValues;
    for (const task of source.get(sourceId)){
      if(player.hasTag(task.source)){
        let lsTask=TaskData[task.chapter].tasks[task.task];
        if(!player.hasTag(`ls:completed_task.${lsTask.task_id}`)){
          player.addTag(`ls:completed_task.${lsTask.task_id}`)
          if(autoClaim){
            giveAward(player,lsTask)
          }
        }
      }
    }
    player.sendMessage("%ls.text.finishImportTask")
  })
}

function showTasksIndex(player){
  let tasksIndexPage=new ActionFormData();
  tasksIndexPage.title("%ls.text.tasksIndexTitle");
  tasksIndexPage.body("%ls.text.tasksIndex");
  tasksIndexPage.button("%ls.text.return_to_menu");
  tasksIndexPage.button("%ls.text.importTask");
  const length=TaskData.length;
  for(let i=0;i<length;i++){
    let chapterName=TaskData[i].chapter_name;
    tasksIndexPage.button(`%${chapterName}`);
  };
  tasksIndexPage.show(player).then((response)=>{
    if (response.canceled) return;
    if (response.selection==0) showMenuIndex(player)
    else if(response.selection==1) showImportTask(player)
    else{
      let chapter=TaskData[response.selection-2];
      showChapterTaskList(chapter,player);
    }
  });
}

function showChapterTaskList(chapter,player){
  let chapterTaskList=chapter.tasks;
  let chapterTaskListPage=new ActionFormData();
  chapterTaskListPage.title(`%${chapter.chapter_name}`);
  chapterTaskListPage.body(`%${chapter.chapter_introduction}`);
  const length=chapterTaskList.length;
  chapterTaskListPage.button(`%ls.text.return_to_all_chapters`)
  for(let i=0;i<length;i++){
    let taskName=chapterTaskList[i].task_name;
    const taskId=chapterTaskList[i].task_id;
    if((!chapterTaskList[i].need_unlock)||(chapterTaskList[i].need_unlock&&player.hasTag(`ls:unlocked_task.${taskId}`))){
      const isTaskFinished=player.hasTag(`ls:completed_task.${taskId}`);
      const isAwardClaimed=player.hasTag(`ls:claimed_award.${taskId}`);
      if (isTaskFinished&&isAwardClaimed) chapterTaskListPage.button({rawtext:[{translate:"ls.text.task_finished_name",with:{rawtext:[{translate:`%${taskName}`}]}}]},`textures/ui/tasks/task_${taskId}`)
      else if (isTaskFinished&&!isAwardClaimed) chapterTaskListPage.button({rawtext:[{translate:"ls.text.claim_award_name",with:{rawtext:[{translate:`%${taskName}`}]}}]},`textures/ui/tasks/task_${taskId}`)
      else chapterTaskListPage.button(`%${taskName}`,`textures/ui/tasks/task_${taskId}`)
    }
  };
  chapterTaskListPage.show(player).then((response)=>{
    if(response.canceled) return;
    if(response.selection==0){
      showTasksIndex(player)
    }
    else{
      let task=chapterTaskList[response.selection-1]
      showTask(chapter,task,player);
    }
  });
}

function showTask(chapter,task,player){
  let taskPage = new MessageFormData();
  const requirements=task.requirement;
  const award=task.award;
  const taskId=task.task_id;
  const isTaskFinished=player.hasTag(`ls:completed_task.${taskId}`);
  const isAwardClaimed=player.hasTag(`ls:claimed_award.${taskId}`);
  taskPage.title(`%${task.task_name}`)
  let taskBody={
    rawtext:[
      {translate: `${task.task_introduction}`},
      {text: "\n\n"}
    ]
  }
  if(isTaskFinished) taskBody.rawtext.push({translate: "ls.text.task_finished"})
  else{
    taskBody.rawtext.push({translate: "ls.text.task.requirements"})
    if(requirements.get_all_items){
      taskBody.rawtext.push({text: "\n"})
      taskBody.rawtext.push({translate: "ls.text.task.requirements.all_items"})
      for(let i=0;i<requirements.get_all_items.length;i++){
        taskBody.rawtext.push({translate: "ls.text.task.requirements.all_items_display",with:{rawtext:[{translate:`item.${requirements.get_all_items[i].item_id}`},{text:`${requirements.get_all_items[i].count.toString()}`}]}})
      }
    }
    if(requirements.get_any_items){
      taskBody.rawtext.push({text: "\n"})
      taskBody.rawtext.push({translate: "ls.text.task.requirements.any_items"})
      for(let i=0;i<requirements.get_any_items.length;i++){
        taskBody.rawtext.push({translate: "ls.text.task.requirements.any_items_display",with:{rawtext:[{translate:`item.${requirements.get_any_items[i].item_id}`},{text:`${requirements.get_any_items[i].count.toString()}`}]}})
      }
    }
  };
  if(isAwardClaimed) taskBody.rawtext.push({text: "\n"},{translate: "ls.text.award_claimed"})
  else{
    taskBody.rawtext.push({text: "\n"},{translate: "ls.text.task.award"},{text: "\n"})
    if(award.get_items){
      for(let i=0;i<award.get_items.length;i++){
        taskBody.rawtext.push({translate: "ls.text.task.award.items_display",with:{rawtext:[{translate:`item.${award.get_items[i].item_id}`},{text:`${award.get_items[i].count.toString()}`}]}})
      }
    }
    if(award.add_xp){
      taskBody.rawtext.push({translate: "ls.text.task.award.add_xp",with:{rawtext:[{text:`${award.add_xp.toString()}`}]}})
    }
  };
  taskPage.body(taskBody);
  taskPage.button1("%ls.text.ruturn_to_tasks_chapter");
  if(isTaskFinished&&isAwardClaimed){
    taskPage.button2("%ls.text.task_finished_button");
  }
  else if(isTaskFinished&&!isAwardClaimed){
    taskPage.button2("%ls.text.claim_award_button");
  }
  else taskPage.button2("%ls.text.submit_task");
  taskPage.show(player).then((response)=>{
    if (response.canceled) return;
    if(isTaskFinished&&isAwardClaimed||response.selection==0){
      showChapterTaskList(chapter,player);
    }
    else if(isTaskFinished&&!isAwardClaimed){
      giveAward(player,task);
      showChapterTaskList(chapter,player);
    }
    else{
      let event=checkTasks(task,player,true);
      if(event) showChapterTaskList(chapter,player);
    }
  })
}

function checkTasks(task,player,autoClaimAward){
  const inventory=player.getComponent("minecraft:inventory").container;
  const requirements=task.requirement;
  const taskId=task.task_id;
  const taskName=task.task_name;
  const playerName=player.name;
  let meet_all_items=false;
  let meet_any_items=false;
  if(requirements.get_all_items){
    let meet_requirements_all_item=[]
    for(let i=0;i<requirements.get_all_items.length;i++){
      let require_item=requirements.get_all_items[i].item_id;
      let require_amount=requirements.get_all_items[i].count;
      let amount=0;
      for(let i=1;i<inventory.size;i++){
        let itemInSlot=inventory.getItem(i);
        if(itemInSlot!==undefined&&itemInSlot.typeId==require_item) amount+=itemInSlot.amount;
      }
      if(amount>=require_amount) meet_requirements_all_item.push(require_item);
    }
    if(meet_requirements_all_item.length==requirements.get_all_items.length) meet_all_items=true;
  }
  else meet_all_items=true;
  if(requirements.get_any_items){
    let meet_requirements_any_item=[]
    for(let i=0;i<requirements.get_any_items.length;i++){
      let require_item=requirements.get_any_items[i].item_id;
      let require_amount=requirements.get_any_items[i].count;
      let amount=0;
      for(let i=1;i<inventory.size;i++){
        let itemInSlot=inventory.getItem(i);
        if(itemInSlot!==undefined&&itemInSlot.typeId==require_item) amount+=itemInSlot.amount;
      }
      if(amount>=require_amount) meet_requirements_any_item.push(require_item);
    }
    if(meet_requirements_any_item.length>0) meet_any_items=true;
  }
  else meet_any_items=true;
  if(meet_any_items&&meet_all_items){
    player.addTag(`ls:completed_task.${taskId}`)
    if(autoClaimAward) giveAward(player,task);
    world.sendMessage({rawtext:[{translate:"ls.text.finish_task_broadcast",with:{rawtext:[{text:`${playerName}`},{translate:taskName}]}}]})
    return true;
  }
  else{
    player.sendMessage("%ls.text.unfinish_task");
    return false;
  }
}

function giveAward(player,task){
  const inventory=player.getComponent("minecraft:inventory").container;
  const award=task.award;
  const taskId=task.task_id;
  player.addTag(`ls:claimed_award.${taskId}`)
  if(award.get_items){
    for(let i=0;i<award.get_items.length;i++){
      let typeId=award.get_items[i].item_id;
      let count=award.get_items[i].count;
      giveItem(player,typeId,count)
    }
  }
  if(award.add_xp){
    let xp=award.add_xp;
    player.addExperience(xp)
  }
  if(award.give_tag){
    player.addTag(award.give_tag)
  }
}

world.afterEvents.playerSpawn.subscribe((event)=>{
  if(!event.initialSpawn) return;
  const player=event.player;
  if(!player.hasTag("ls:claimed_task_book")){
    giveItem(player,"legendary_sword:forgotten_book",1)
    player.addTag("ls:claimed_task_book")
  }
})

world.afterEvents.itemUse.subscribe((event)=>{
  const player=event.source;
  const itemStack=event.itemStack;
  if(itemStack.typeId=="legendary_sword:forgotten_book"){
    showMenuIndex(player);
  }
})

system.beforeEvents.startup.subscribe((event)=>{
  event.itemComponentRegistry.registerCustomComponent("legendary_sword:article_unlocker",{
    onUse(event,p){
      const { source, itemStack } = event;
      const player=event.source;
      let article=ArticleData[p.params.article_id-1];
      showArticle(player,article);
      if(!player.hasTag(`ls:unlocked_article.${article.article_id}`)){
        player.addTag(`ls:unlocked_article.${article.article_id}`);
        player.sendMessage({rawtext:[{translate:"ls.text.unlock_article",with:{rawtext:[{translate:`ls.text.article.${article.article_id}.title`}]}}]})
      }
    }
  });
  event.itemComponentRegistry.registerCustomComponent("legendary_sword:lootbag",{
    onUse(event,p){
      const { source, itemStack } = event;
      const player=event.source;
      const dimension=player.dimension;
      const location=player.location;
      if(itemStack.amount-1<=0){
        player.getComponent("minecraft:equippable").setEquipment("Mainhand")
      }
      else{
        itemStack.amount-=1;
        player.getComponent("minecraft:equippable").setEquipment("Mainhand",itemStack)
      }
      giveLoot(player,p.params.loot)
    }
  })
})