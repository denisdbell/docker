webpackJsonp([82],{2322:function(a,n){a.exports=";\n\n(function($) {\n  $.fn.highchartTable = function() {\n    \n    var allowedGraphTypes = ['column', 'line', 'area', 'spline', 'pie'];\n\n    var getCallable = function (table, attribute) {\n      var callback = $(table).data(attribute);\n      if (typeof callback != 'undefined') {\n        var infosCallback = callback.split('.');\n        var callable      = window[infosCallback[0]];\n        for(var i = 1, infosCallbackLength = infosCallback.length; i < infosCallbackLength; i++) {\n          callable = callable[infosCallback[i]];\n        }\n        return callable;\n      }\n    };\n\n    this.each(function() {\n      var table = $(this);\n      var $table = $(table);\n      var nbYaxis = 1;\n\n      // Retrieve graph title from the table caption\n      var captions   = $('caption', table);\n      var graphTitle = captions.length ? $(captions[0]).text() : '';\n\n      var graphContainer;\n      if ($table.data('graph-container-before') != 1) {\n        // Retrieve where the graph must be displayed from the graph-container attribute\n        var graphContainerSelector = $table.data('graph-container');\n        if (!graphContainerSelector) {\n          throw \"graph-container data attribute is mandatory\";\n        }\n\n        if (graphContainerSelector[0] === '#' || graphContainerSelector.indexOf('..')===-1) {\n          // Absolute selector path\n          graphContainer = $(graphContainerSelector);\n        } else {\n          var referenceNode                 = table;\n          var currentGraphContainerSelector = graphContainerSelector;\n\n          while (currentGraphContainerSelector.indexOf('..')!==-1) {\n            currentGraphContainerSelector = currentGraphContainerSelector.replace(/^.. /, '');\n            referenceNode = referenceNode.parent();\n          }\n\n          graphContainer = $(currentGraphContainerSelector, referenceNode);\n        }\n        if (graphContainer.length !== 1) {\n          throw \"graph-container is not available in this DOM or available multiple times\";\n        }\n        graphContainer = graphContainer[0];\n      } else {\n        $table.before('<div></div>');\n        graphContainer = $table.prev();\n        graphContainer = graphContainer[0];\n      }\n\n      // Retrieve graph type from graph-type attribute\n      var globalGraphType = $table.data('graph-type');\n      if (!globalGraphType) {\n        throw \"graph-type data attribute is mandatory\";\n      }\n      if ($.inArray(globalGraphType, allowedGraphTypes) == -1) {\n        throw \"graph-container data attribute must be one of \" + allowedGraphTypes.join(', ');\n      }\n\n      var stackingType = $table.data('graph-stacking');\n      if (!stackingType) {\n        stackingType = 'normal';\n      }\n\n      var dataLabelsEnabled = $table.data('graph-datalabels-enabled');\n      var isGraphInverted   = $table.data('graph-inverted') == 1;\n\n      // Retrieve series titles\n      var ths            = $('thead th', table);\n      var columns        = [];\n      var vlines         = [];\n      var skippedColumns = 0;\n      var graphIsStacked = false;\n      ths.each(function(indexTh, th) {\n        var $th = $(th);\n        var columnScale = $th.data('graph-value-scale');\n\n        var serieGraphType = $th.data('graph-type');\n        if($.inArray(serieGraphType, allowedGraphTypes) == -1) {\n          serieGraphType = globalGraphType;\n        }\n\n        var serieStackGroup = $th.data('graph-stack-group');\n        if(serieStackGroup) {\n          graphIsStacked = true;\n       }\n\n        var serieDataLabelsEnabled = $th.data('graph-datalabels-enabled');\n        if (typeof serieDataLabelsEnabled == 'undefined') {\n          serieDataLabelsEnabled = dataLabelsEnabled;\n        }\n\n        var yaxis = $th.data('graph-yaxis');\n\n        if (typeof yaxis != 'undefined' && yaxis == '1') {\n          nbYaxis = 2;\n        }\n\n        var isColumnSkipped = $th.data('graph-skip') == 1;\n        if (isColumnSkipped)\n        {\n          skippedColumns = skippedColumns + 1;\n        }\n\n        var thGraphConfig = {\n          libelle:           $th.text(),\n          skip:              isColumnSkipped,\n          indexTd:           indexTh - skippedColumns - 1,\n          color:             $th.data('graph-color'),\n          visible:           !$th.data('graph-hidden'),\n          yAxis:             typeof yaxis != 'undefined' ? yaxis : 0,\n          dashStyle:         $th.data('graph-dash-style') || 'solid',\n          dataLabelsEnabled: serieDataLabelsEnabled == 1,\n          dataLabelsColor:   $th.data('graph-datalabels-color') ||  $table.data('graph-datalabels-color')\n\n        };\n\n        var vlinex = $th.data('graph-vline-x');\n        if (typeof vlinex == 'undefined') {\n          thGraphConfig.scale     = typeof columnScale != 'undefined' ? parseFloat(columnScale) : 1;\n          thGraphConfig.graphType = serieGraphType == 'column' && isGraphInverted ? 'bar' : serieGraphType;\n          thGraphConfig.stack     = serieStackGroup;\n          thGraphConfig.unit      = $th.data('graph-unit');\n          columns[indexTh]        = thGraphConfig;\n        } else {\n          thGraphConfig.x      = vlinex;\n          thGraphConfig.height = $th.data('graph-vline-height');\n          thGraphConfig.name   = $th.data('graph-vline-name');\n          vlines[indexTh]      = thGraphConfig;\n        }\n      });\n      \n      var series = [];\n      $(columns).each(function(indexColumn, column) {\n        if(indexColumn!=0 && !column.skip) {\n\n          var serieConfig = {\n            name:      column.libelle + (column.unit ? ' (' + column.unit + ')' : ''),\n            data:      [],\n            type:      column.graphType,\n            stack:     column.stack,\n            color:     column.color,\n            visible:   column.visible,\n            yAxis:     column.yAxis,\n            dashStyle: column.dashStyle,\n            marker: {\n                enabled: false\n            },\n            dataLabels: {\n              enabled: column.dataLabelsEnabled,\n              color:   column.dataLabelsColor,\n              align:   $table.data('graph-datalabels-align') || (globalGraphType == 'column' && isGraphInverted == 1 ? undefined : 'center')\n            }\n          };\n\n          if(column.dataLabelsEnabled) {\n            var callableSerieDataLabelsFormatter = getCallable(table, 'graph-datalabels-formatter');\n            if (callableSerieDataLabelsFormatter) {\n              serieConfig.dataLabels.formatter = function () {\n                return callableSerieDataLabelsFormatter(this.y);\n              };\n            }\n          }\n          series.push(serieConfig);\n        }\n      });\n\n      $(vlines).each(function(indexColumn, vline) {\n        if (typeof vline != 'undefined' && !vline.skip) {\n          series.push({\n            name:    vline.libelle,\n            data:    [{x: vline.x, y:0, name: vline.name}, {x:vline.x, y:vline.height, name: vline.name}],\n            type:    'spline',\n            color:   vline.color,\n            visible: vline.visible,\n            marker: {\n              enabled: false\n            }\n          });\n        }\n      });\n\n      var xValues         = [];\n      var callablePoint   = getCallable(table, 'graph-point-callback');\n      var isGraphDatetime = $table.data('graph-xaxis-type') == 'datetime';\n      \n      var rows            = $('tbody:first tr', table);\n      rows.each(function(indexRow, row) {\n        if (!!$(row).data('graph-skip')) {\n          return;\n        }\n\n        var tds = $('td', row);\n        tds.each(function(indexTd, td) {\n          var cellValue;\n          var column = columns[indexTd];\n\n          if (column.skip) {\n            return;\n          }\n          var $td = $(td);\n          if (indexTd==0) {\n            cellValue = $td.text();\n            xValues.push(cellValue);\n          } else {\n            var rawCellValue = $td.text();\n            var serie  = series[column.indexTd];\n\n            if (rawCellValue.length==0) {\n              if (!isGraphDatetime) {\n                serie.data.push(null);\n              }\n            } else {\n              var cleanedCellValue = rawCellValue.replace(/\\s/g, '').replace(/,/, '.');\n              var eventOptions = {\n                 value: cleanedCellValue,\n                 rawValue: rawCellValue,\n                 td: $td,\n                 tr: $(row),\n                 indexTd: indexTd,\n                 indexTr: indexRow\n               }\n               $table.trigger('highchartTable.cleanValue', eventOptions);\n               cellValue = Math.round(parseFloat(eventOptions.value) * column.scale * 100) / 100;\n\n                var dataGraphX = $td.data('graph-x');\n\n                if (isGraphDatetime) {\n                  dataGraphX    = $('td', $(row)).first().text();\n                  var date      = parseDate(dataGraphX);\n                  dataGraphX    = date.getTime() - date.getTimezoneOffset()*60*1000;\n                }\n\n                var tdGraphName = $td.data('graph-name');\n                var serieDataItem = {\n                  name:   typeof tdGraphName != 'undefined' ? tdGraphName : rawCellValue,\n                  y:      cellValue,\n                  x:      dataGraphX //undefined if no x defined in table\n                };\n\n                if (callablePoint) {\n                  serieDataItem.events = {\n                    click: function () {\n                        return callablePoint(this);\n                      }\n                  };\n                }\n\n                if (column.graphType === 'pie') {\n                  if ($td.data('graph-item-highlight')) {\n                    serieDataItem.sliced = 1;\n                  }\n                }\n\n                var tdGraphItemColor = $td.data('graph-item-color');\n                if (typeof tdGraphItemColor != 'undefined') {\n                  serieDataItem.color =  tdGraphItemColor;\n                }\n\n              serie.data.push(serieDataItem);\n            }\n          }\n        });\n\n      });\n\n      var getYaxisAttr = function($table, yAxisNum, name) {\n          var oldConvention = $table.data('graph-yaxis-' + yAxisNum + '-' + name);\n          if (typeof oldConvention != 'undefined') {\n              return oldConvention;\n          }\n\n          return $table.data('graph-yaxis' + yAxisNum + '-' + name);\n      };\n\n      var yAxisConfig = [];\n      var yAxisNum;\n      for (yAxisNum=1 ; yAxisNum <= nbYaxis ; yAxisNum++) {\n        var yAxisConfigCurrentAxis = {\n          title: {\n            text: typeof getYaxisAttr($table, yAxisNum, 'title-text') != 'undefined'  ? getYaxisAttr($table, yAxisNum, 'title-text') : null\n          },\n          max:          typeof getYaxisAttr($table, yAxisNum, 'max') != 'undefined' ? getYaxisAttr($table, yAxisNum, 'max') : null,\n          min:          typeof getYaxisAttr($table, yAxisNum, 'min') != 'undefined' ? getYaxisAttr($table, yAxisNum, 'min') : null,\n          reversed:     getYaxisAttr($table, yAxisNum, 'reversed') == '1',\n          opposite:     getYaxisAttr($table, yAxisNum, 'opposite') == '1',\n          tickInterval: getYaxisAttr($table, yAxisNum, 'tick-interval') || null,\n          labels: {\n            rotation: getYaxisAttr($table, yAxisNum, 'rotation') || 0\n          },\n          startOnTick: getYaxisAttr($table, yAxisNum, 'start-on-tick') != \"0\",\n          endOnTick:   getYaxisAttr($table, yAxisNum, 'end-on-tick') != \"0\",\n          stackLabels : {\n            enabled: getYaxisAttr($table, yAxisNum, 'stacklabels-enabled') == '1'\n          },\n          gridLineInterpolation: getYaxisAttr($table, yAxisNum, 'grid-line-interpolation') || null\n        };\n\n        var callableYAxisFormatter = getCallable(table, 'graph-yaxis-'+yAxisNum+'-formatter-callback');\n\n        if (!callableYAxisFormatter) {\n            callableYAxisFormatter = getCallable(table, 'graph-yaxis'+yAxisNum+'-formatter-callback');\n        }\n\n        if (callableYAxisFormatter) {\n          yAxisConfigCurrentAxis.labels.formatter = function () {\n              return callableYAxisFormatter(this.value);\n          };\n        }\n\n        yAxisConfig.push(yAxisConfigCurrentAxis);\n      }\n\n      var defaultColors = [\n        '#4572A7',\n        '#AA4643',\n        '#89A54E',\n        '#80699B',\n        '#3D96AE',\n        '#DB843D',\n        '#92A8CD',\n        '#A47D7C',\n        '#B5CA92'\n      ];\n      var colors = [];\n\n      var themeColors = typeof Highcharts.theme != 'undefined' && typeof Highcharts.theme.colors != 'undefined' ? Highcharts.theme.colors : [];\n      var lineShadow  = $table.data('graph-line-shadow');\n      var lineWidth   = $table.data('graph-line-width') || 2;\n\n      var nbOfColors = Math.max(defaultColors.length, themeColors.length);\n      for(var i=0; i < nbOfColors; i++) {\n        var dataname = 'graph-color-' + (i+1);\n        colors.push(typeof $table.data(dataname) != 'undefined' ? $table.data(dataname) : typeof themeColors[i] != 'undefined' ? themeColors[i] : defaultColors[i]);\n      }\n\n      var marginTop    = $table.data('graph-margin-top');\n      var marginRight  = $table.data('graph-margin-right');\n      var marginBottom = $table.data('graph-margin-bottom');\n      var marginLeft   = $table.data('graph-margin-left');\n      \n      var xAxisLabelsEnabled = $table.data('graph-xaxis-labels-enabled');\n\n      var xAxisLabelStyle = {};\n      var xAxisLabelFontSize = $table.data('graph-xaxis-labels-font-size');\n      \n      if (typeof xAxisLabelFontSize != 'undefined')\n      {\n        xAxisLabelStyle.fontSize = xAxisLabelFontSize; \n      }\n\n      var highChartConfig = {\n        colors: colors,\n        chart: {\n          renderTo:     graphContainer,\n          inverted:     isGraphInverted,\n          marginTop:    typeof marginTop != 'undefined' ? marginTop : null,\n          marginRight:  typeof marginRight != 'undefined' ? marginRight : null,\n          marginBottom: typeof marginBottom != 'undefined' ? marginBottom : null,\n          marginLeft:   typeof marginLeft != 'undefined' ? marginLeft : null,\n          spacingTop:   $table.data('graph-spacing-top') || 10,\n          height:       $table.data('graph-height') || null,\n          zoomType:     $table.data('graph-zoom-type') || null,\n          polar:        $table.data('graph-polar') || null\n        },\n        title: {\n          text: graphTitle\n        },\n        subtitle: {\n          text: $table.data('graph-subtitle-text') || ''\n        },\n        legend: {\n          enabled:     $table.data('graph-legend-disabled') != '1',\n          layout:      $table.data('graph-legend-layout') || 'horizontal',\n          symbolWidth: $table.data('graph-legend-width') || 30,\n          x:           $table.data('graph-legend-x') || 15,\n          y:           $table.data('graph-legend-y') || 0\n        },\n        xAxis: {\n          categories:             ($table.data('graph-xaxis-type') != 'datetime') ? xValues : undefined,\n          type:                   ($table.data('graph-xaxis-type') == 'datetime') ? 'datetime' :  undefined,\n          reversed:               $table.data('graph-xaxis-reversed') == '1',\n          opposite:               $table.data('graph-xaxis-opposite') == '1',\n          showLastLabel:          typeof $table.data('graph-xaxis-show-last-label') != 'undefined' ? $table.data('graph-xaxis-show-last-label') : true,\n          tickInterval:           $table.data('graph-xaxis-tick-interval') || null,\n          dateTimeLabelFormats:   { //by default, we display the day and month on the datetime graphs\n            second: '%e. %b',\n            minute: '%e. %b',\n            hour:   '%e. %b',\n            day:    '%e. %b',\n            week:   '%e. %b',\n            month:  '%e. %b',\n            year:   '%e. %b'\n          },\n          labels:\n          {\n            rotation: $table.data('graph-xaxis-rotation') || undefined,\n            align:    $table.data('graph-xaxis-align') || undefined, \n            enabled:  typeof xAxisLabelsEnabled != 'undefined' ? xAxisLabelsEnabled : true,\n            style:    xAxisLabelStyle\n          },\n          startOnTick: $table.data('graph-xaxis-start-on-tick'),\n          endOnTick:   $table.data('graph-xaxis-end-on-tick'),\n          min: getXAxisMinMax(table, 'min'),\n          max: getXAxisMinMax(table, 'max'),\n          alternateGridColor: $table.data('graph-xaxis-alternateGridColor') || null,\n          title: {\n            text: $table.data('graph-xaxis-title-text') || null\n          },\n          gridLineWidth:     $table.data('graph-xaxis-gridLine-width') || 0,\n          gridLineDashStyle: $table.data('graph-xaxis-gridLine-style') || 'ShortDot',\n          tickmarkPlacement: $table.data('graph-xaxis-tickmark-placement') || 'between',\n          lineWidth:         $table.data('graph-xaxis-line-width') || 0\n        },\n        yAxis: yAxisConfig,\n        tooltip: {\n            formatter: function() {\n              if ($table.data('graph-xaxis-type') == 'datetime') {\n                return '<b>'+ this.series.name +'</b><br/>'+  Highcharts.dateFormat('%e. %b', this.x) +' : '+ this.y;\n              } else {\n                var xValue = typeof xValues[this.point.x] != 'undefined' ? xValues[this.point.x] : this.point.x;\n                if (globalGraphType === 'pie') {\n                  return '<strong>' + this.series.name + '</strong><br />' + xValue + ' : '  + this.point.y;\n                }\n                return '<strong>' + this.series.name + '</strong><br />' + xValue + ' : '  + this.point.name;\n              }\n            }\n        },\n        credits: {\n          enabled: false\n        },\n        plotOptions: {\n          line: {\n            dataLabels: {\n              enabled: true\n            },\n            lineWidth: lineWidth\n          },\n          area: {\n            lineWidth:   lineWidth,\n            shadow:      typeof lineShadow != 'undefined' ? lineShadow : true,\n            fillOpacity: $table.data('graph-area-fillOpacity') || 0.75\n          },\n          pie: {\n            allowPointSelect: true,\n            dataLabels: {\n              enabled: true\n            },\n            showInLegend: $table.data('graph-pie-show-in-legend') == '1',\n            size:         '80%'\n          },\n          series: {\n            animation:       false,\n            stickyTracking : false,\n            stacking:        graphIsStacked ? stackingType : null,\n            groupPadding:    $table.data('graph-group-padding') || 0\n          }\n        },\n        series: series,\n        exporting: {\n            filename: graphTitle.replace(/ /g, '_'),\n            buttons: {\n              exportButton: {\n                menuItems: null,\n                onclick: function() {\n                  this.exportChart();\n                }\n              }\n            }\n          }\n      };\n\n      $table.trigger('highchartTable.beforeRender', highChartConfig);\n      new Highcharts.Chart(highChartConfig);\n\n    });\n    //for fluent api\n    return this;\n  };\n  \n  var getXAxisMinMax = function(table, minOrMax) {\n    var value = $(table).data('graph-xaxis-'+minOrMax);\n    if (typeof value != 'undefined') {\n      if ($(table).data('graph-xaxis-type') == 'datetime') {\n        var date      = parseDate(value);\n        return date.getTime() - date.getTimezoneOffset()*60*1000;\n      }\n      return value;\n    }\n    return null;\n  };\n\n  var parseDate = function(datetime) {\n    var calculatedateInfos  = datetime.split(' ');\n    var dateDayInfos        = calculatedateInfos[0].split('-');\n    var min                 = null;\n    var hour                = null;\n    // If hour and minute are available in the datetime string\n    if(calculatedateInfos[1]) {\n      var dateHourInfos = calculatedateInfos[1].split(':');\n      min               =  parseInt(dateHourInfos[0], 10);\n      hour              = parseInt(dateHourInfos[1], 10);\n    }\n    return new Date(parseInt(dateDayInfos[0], 10), parseInt(dateDayInfos[1], 10)-1, parseInt(dateDayInfos[2], 10), min, hour);\n  };\n  \n})(jQuery);\n"},2570:function(a,n,e){e(1372)(e(2322))}});