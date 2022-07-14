(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dino_atlas_1", frames: [[802,0,84,90],[888,0,84,90],[0,78,84,90],[86,78,84,90],[0,0,800,24],[0,26,800,24],[0,52,800,24],[974,0,30,66],[272,78,64,66],[172,78,98,66]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.dino0 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dino1 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dino2 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dino3 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.floor0 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.floor1 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.floor2 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.obstacle0 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.obstacle1 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.obstacle2 = function() {
	this.initialize(ss["dino_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.obstacle2_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.obstacle2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.obstacle2_mc, new cjs.Rectangle(0,0,98,66), null);


(lib.obstacle1_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.obstacle1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.obstacle1_mc, new cjs.Rectangle(0,0,64,66), null);


(lib.obstacle0_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.obstacle0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.obstacle0_mc, new cjs.Rectangle(0,0,30,66), null);


(lib.floor2_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.floor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.floor2_mc, new cjs.Rectangle(0,0,800,24), null);


(lib.floor1_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.floor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.floor1_mc, new cjs.Rectangle(0,0,800,24), null);


(lib.floor0_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.floor0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.floor0_mc, new cjs.Rectangle(0,0,800,24), null);


(lib.dino3_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dino3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino3_mc, new cjs.Rectangle(0,0,84,90), null);


(lib.dino2_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dino2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino2_mc, new cjs.Rectangle(0,0,84,90), null);


(lib.dino1_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dino1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino1_mc, new cjs.Rectangle(0,0,84,90), null);


(lib.dino0_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dino0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino0_mc, new cjs.Rectangle(0,0,84,90), null);


(lib.player_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.dino0_mc();
	this.instance.setTransform(40,43,1,1,0,0,0,40,43);

	this.instance_1 = new lib.dino1_mc();
	this.instance_1.setTransform(40,43,1,1,0,0,0,40,43);

	this.instance_2 = new lib.dino2_mc();
	this.instance_2.setTransform(40,43,1,1,0,0,0,40,43);

	this.instance_3 = new lib.dino3_mc();
	this.instance_3.setTransform(40,43,1,1,0,0,0,40,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,90);


(lib.Obstacles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.obstacle0_mc();
	this.instance.setTransform(15,33,1,1,0,0,0,15,33);

	this.instance_1 = new lib.obstacle1_mc();
	this.instance_1.setTransform(32,33,1,1,0,0,0,32,33);

	this.instance_2 = new lib.obstacle2_mc();
	this.instance_2.setTransform(49,33,1,1,0,0,0,49,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,66);


(lib.floor_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.floor2_mc();
	this.instance.setTransform(1200,12,1,1,0,0,0,400,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-386.65},119).to({x:2000},1).to({x:1213.35},59).wait(1));

	// Layer_2
	this.instance_1 = new lib.floor1_mc();
	this.instance_1.setTransform(400,12,1,1,0,0,0,400,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-386.65},59).to({x:2000},1).to({x:413.35},119).wait(1));

	// Layer_1
	this.instance_2 = new lib.floor0_mc();
	this.instance_2.setTransform(2000,12,1,1,0,0,0,400,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-386.65},179).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-786.6,0,3186.6,24);


// stage content:
(lib.dino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var player = this.player_mc;
		player.score = 0;
		player.stop();//讓玩家開始前是靜止的
		var playerBounds=player.getBounds();
		player.width = 72;
		player.height = 40;
		player.isLanded = true;
		var floor = this.floor_mc;
		floor.stop();
		var obstacles = [];
		var gameoverText = this.gameover_text;
		gameoverText.visible = false;
		var scoreText = this.score_text;
		var gameStarted = false;
		var gameEnded = false;
		function Start(){
		
		    player.y = 380;//因為player其實是在y=380的位置
		    player.isLanded = true;
			player.score = 0;
			scoreText.text = player.score.toString().padStart(5, '0');
			floor.play();
		    for(var i=0;i<obstacles.length;i++){
		        stage.removeChild(obstacles[i]);
		    }
		    obstacles=[];
			gameoverText.visible = false;
		    RecursiveSpawn();
			gameStarted = true;
		    gameEnded = false;
		};
		
		setInterval(increaseScore, 100);
		function increaseScore() {
			if (gameStarted && !gameEnded) {
				player.score++;
				scoreText.text = player.score.toString().padStart(5, '0');
			}
		}
		
		
		//按鍵事件綁在window上
		window.addEventListener("keydown", Jump);
		function Jump(e) {
			if(gameEnded){
				Start();
				player.gotoAndPlay(2); //將角色切換至跑步影格並撥放
				return;
			}	
			if (player.isLanded) {
				player.isLanded = false;
				player.ani = gsap.to(player, {
					duration: 0.25, //跳躍動畫的時長
					y: "-=200", //跳躍高度
					ease: Power2.easeOut(),
					repeat: 1, //和yoyo搭配使用
					yoyo: true, //跳躍的部分播完後，沿原路徑返回
					onComplete: Landed //包含返回的全部動畫播完後，做這件事
				});
				player.gotoAndStop(0); //將角色切換至停止移動影格並停在那
			}
		};
		
		function Landed() {
			if(!gameStarted) Start();
			player.isLanded = true;
			player.gotoAndPlay(2); //將角色切換至跑步影格並撥放
		};
		var nextSpawn;
		function RecursiveSpawn() {
			var time = gsap.utils.random(0.5, 1, 0.01) * 1000;
			nextSpawn = setTimeout(function () {
				SpawnObstacle();
				RecursiveSpawn();
			},time);
		};
		
		function SpawnObstacle() {
			var obe = new lib.Obstacles();//產生障礙物
			obe.x = 1500;//設定障礙物目前x位置
			obe.y = 400;//設定障礙物目前y位置
			obe.gotoAndStop(gsap.utils.random(0, obe.totalFrames, 1));//隨機選到其中一種仙人掌
			var body = obe.getBounds();
			obe.width = body.width;
			obe.height = body.height;
			obstacles.push(obe);
			obe.ani = gsap.to(obe, {
				duration: 2,//動畫持續時間
				x: "-=1600",//向左移動x以1600單位
				ease: "none",//不要使用緩動函式
				onUpdate: (function () {
					if (HitBounds(player, obe)) {
						for(var i=0;i<obstacles.length;i++){
							obstacles[i].ani.kill();
						}
						player.ani?.kill();//清除player動畫
						player.gotoAndStop(1);//死亡影格
						floor.stop();
						clearTimeout(nextSpawn);
						gameoverText.visible = true;
						gameEnded = true;
					}
				}),
				onComplete: (function () {
					stage.removeChild(obe);//到底後把自己刪掉
					obstacles.shift();
				})
			});
		
			stage.addChild(obe);//將產生出來的障礙物
		}
		
		function HitBounds(mc1, mc2) {
			return mc1.x < mc2.x + mc2.width && mc1.x + mc1.width > mc2.x && mc1.y < mc2.y + mc2.height && mc1.y + mc1.height > mc2.y;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// score
	this.score_text = new cjs.Text("00000", "24px 'Arial'", "#666666");
	this.score_text.name = "score_text";
	this.score_text.textAlign = "center";
	this.score_text.lineHeight = 26;
	this.score_text.lineWidth = 126;
	this.score_text.parent = this;
	this.score_text.setTransform(1139.95,68.9);

	this.timeline.addTween(cjs.Tween.get(this.score_text).wait(1));

	// endText
	this.gameover_text = new cjs.Text("G A M E  O V E R\n\npress any key", "24px 'Arial'", "#666666");
	this.gameover_text.name = "gameover_text";
	this.gameover_text.textAlign = "center";
	this.gameover_text.lineHeight = 26;
	this.gameover_text.lineWidth = 500;
	this.gameover_text.parent = this;
	this.gameover_text.setTransform(640,308.4);

	this.timeline.addTween(cjs.Tween.get(this.gameover_text).wait(1));

	// player
	this.player_mc = new lib.player_mc();
	this.player_mc.name = "player_mc";
	this.player_mc.setTransform(121,380,1,1,0,0,0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.player_mc).wait(1));

	// floor
	this.floor_mc = new lib.floor_mc();
	this.floor_mc.name = "floor_mc";
	this.floor_mc.setTransform(1680,462,1,1,0,0,0,1680,12);

	this.timeline.addTween(cjs.Tween.get(this.floor_mc).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,426.9,1760,47.10000000000002);
// library properties:
lib.properties = {
	id: '3F265B980FEFB543BCC73EA49C3B3A94',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dino_atlas_1.png?1653503978635", id:"dino_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3F265B980FEFB543BCC73EA49C3B3A94'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;	
		var iwa = $('.animate_content').width(), iha=$('.animate_content').height();	
		if (iw>iwa) iw=iwa; if(ih>iha) ih=iha;

		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;