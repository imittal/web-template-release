var ResizeEvents={baseTextHeight:null,currentTextHeight:null,baseWindowWidth:null,baseWindowHeight:null,currentWindowWidth:null,currentWindowHeight:null,initialised:!1,intervalReference:null,textSizeTestElement:null,eventElement:jQuery(document),conf:{textResizeEvent:"x-text-resize",windowResizeEvent:"x-window-resize",windowWidthResizeEvent:"x-window-width-resize",windowHeightResizeEvent:"x-window-height-resize",initialResizeEvent:"x-initial-sizes",pollFrequency:500,textSizeTestElId:"text-resize"}};!function(e){ResizeEvents.bind=function(t,i){e(function(){!0!==ResizeEvents.initialised&&ResizeEvents.initialise()}),ResizeEvents.eventElement.bind(t,i)},ResizeEvents.initialise=function(){!0!==ResizeEvents.initialised&&(ResizeEvents.textSizeTestElement=e('<span id="'+ResizeEvents.conf.textSizeTestElId+'" style="position: absolute; left: -9999px; font-size: 100%; font-family: Courier New, mono; margin: 0; padding: 0;">&nbsp;</span>').get(0),e("body").append(ResizeEvents.textSizeTestElement),windowWidthNow=e(window).width(),windowHeightNow=e(window).height(),textHeightNow=getTextHeight(),ResizeEvents.baseTextHeight=textHeightNow,ResizeEvents.currentTextHeight=textHeightNow,ResizeEvents.baseWindowWidth=windowWidthNow,ResizeEvents.currentWindowWidth=windowWidthNow,ResizeEvents.baseWindowHeight=windowHeightNow,ResizeEvents.currentWindowHeight=windowHeightNow,null==ResizeEvents.intervalReference&&(ResizeEventsPoll(),ResizeEvents.intervalReference=window.setInterval("ResizeEventsPoll()",ResizeEvents.conf.pollFrequency)),ResizeEvents.eventElement.trigger(ResizeEvents.conf.initialResizeEvent,[emPixelNow,textHeightNow,windowWidthNow,windowHeightNow]),ResizeEvents.initialised=!0)},ResizeEventsPoll=function(){windowWidthNow=e(window).width(),windowHeightNow=e(window).height(),textHeightNow=getTextHeight(),emPixelNow=windowWidthNow/textHeightNow,widthChanged=!1,ResizeEvents.currentWindowWidth!=windowWidthNow&&(ResizeEvents.eventElement.trigger(ResizeEvents.conf.windowWidthResizeEvent,[emPixelNow,textHeightNow,windowWidthNow,windowHeightNow]),ResizeEvents.eventElement.trigger(ResizeEvents.conf.windowResizeEvent,[emPixelNow,textHeightNow,windowWidthNow,windowHeightNow]),ResizeEvents.currentWindowWidth=windowWidthNow,widthChanged=!0),ResizeEvents.currentWindowHeight!=windowHeightNow&&(ResizeEvents.eventElement.trigger(ResizeEvents.conf.windowHeightResizeEvent,[emPixelNow,textHeightNow,windowWidthNow,windowHeightNow]),widthChanged||ResizeEvents.eventElement.trigger(ResizeEvents.conf.windowResizeEvent,[emPixelNow,textHeightNow,windowWidthNow,windowHeightNow]),ResizeEvents.currentWindowHeight=windowHeightNow),ResizeEvents.currentTextHeight!=textHeightNow&&(ResizeEvents.eventElement.trigger(ResizeEvents.conf.textResizeEvent,[emPixelNow,textHeightNow,windowWidthNow,windowHeightNow]),ResizeEvents.currentTextHeight=textHeightNow)},getTextHeight=function(){return ResizeEvents.textSizeTestElement.offsetHeight+""}}(jQuery);