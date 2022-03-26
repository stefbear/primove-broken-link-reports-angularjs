(function () {
	"use strict";
	"use strict";

	var app = angular.module("viewCustom", ["angularLoad"]);

	var tmplReportBrokenLinkForm = `
        <div ng-if="showService">                

            <div layout="row" class="form-focus service-form layout-margin layout-row" layout-margin="">
            
            <div class="service-form-dynamic-panel layout-column flex" flex="" layout="column">

                <div class="layout-align-center-center layout-row" layout="row" layout-align="center center">
                <a href="javascript:void(0);" ng-model="collapsed" ng-click="collapsed=!collapsed">
                    <h3>         
                    
                        <md-icon id="broadcast-report-icon">                    
                            <svg viewBox="0 0 20 20" width="100%" height="100%" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.684,16.959L10.879,8.52c0.886-0.343,1.517-1.193,1.517-2.186c0-1.296-1.076-2.323-2.396-2.323S7.604,5.037,7.604,6.333c0,0.993,0.63,1.843,1.517,2.186l-4.818,8.439c-0.189,0.311,0.038,0.708,0.412,0.708h10.558C15.645,17.667,15.871,17.27,15.684,16.959 M8.562,6.333c0-0.778,0.645-1.382,1.438-1.382s1.438,0.604,1.438,1.382c0,0.779-0.645,1.412-1.438,1.412S8.562,7.113,8.562,6.333 M5.55,16.726L10,8.91l4.435,7.815H5.55z M15.285,9.62c1.26-2.046,1.26-4.525,0-6.572c-0.138-0.223-0.064-0.512,0.162-0.646c0.227-0.134,0.521-0.063,0.658,0.16c1.443,2.346,1.443,5.2,0,7.546c-0.236,0.382-0.641,0.17-0.658,0.159C15.221,10.131,15.147,9.842,15.285,9.62 M13.395,8.008c0.475-1.063,0.475-2.286,0-3.349c-0.106-0.238,0.004-0.515,0.246-0.62c0.242-0.104,0.525,0.004,0.632,0.242c0.583,1.305,0.583,2.801,0,4.106c-0.214,0.479-0.747,0.192-0.632,0.242C13.398,8.523,13.288,8.247,13.395,8.008 M3.895,10.107c-1.444-2.346-1.444-5.2,0-7.546c0.137-0.223,0.431-0.294,0.658-0.16c0.226,0.135,0.299,0.424,0.162,0.646c-1.26,2.047-1.26,4.525,0,6.572c0.137,0.223,0.064,0.512-0.162,0.646C4.535,10.277,4.131,10.489,3.895,10.107 M5.728,8.387c-0.583-1.305-0.583-2.801,0-4.106c0.106-0.238,0.39-0.346,0.631-0.242c0.242,0.105,0.353,0.382,0.247,0.62c-0.475,1.063-0.475,2.286,0,3.349c0.106,0.238-0.004,0.515-0.247,0.62c-0.062,0.027-0.128,0.04-0.192,0.04C5.982,8.668,5.807,8.563,5.728,8.387"></path>
                            </svg>
                        </md-icon>               
                
                    {{boxTitleReportBrokenLink}}
                    </h3>

                    <p class="text-italic weak-text layout-row" layout="row">{{boxTitleNoteReportBrokenLink}}</p>            
                </a>
                </div>        

                <div ng-show="collapsed">

                <form name="formBrokenLinkReport" ng-submit="formBrokenLinkReport.$valid && submit(brokenlink)"> 
                
                    <div flex="" layout="row" layout-align="center center" class="layout-align-center-center layout-row flex">
                    
                    <div layout="column" layout-align="start stretch" class="layout-align-start-stretch layout-column layout-margin flex" layout-margin="">    
                        

                        <md-input-container class="relative-position underlined-input md-primoExplore-theme md-required" style="margin-bottom: 1.5rem">                
                        
                        <md-select class="md-select" id="brokenlinkProblem" ng-model="brokenlink.selectedproblem" ng-required="true" placeholder="Which of the following describes your problem with this article most accurately?">
                            <md-option ng-value="problem" ng-repeat="problem in problems">{{ problem.name }}</md-option>                    
                        </md-select>

                        </md-input-container>

                        <md-input-container class="relative-position underlined-input md-primoExplore-theme">
                        
                        <label translate="Comments (optional)" for="brokenlinkComment">Comments (optional)</label>
                        
                        <input type="text" maxlength="4000" class="md-input" id="brokenlinkComment" ng-model="brokenlink.comment">
                                                        
                        </md-input-container>


                    </div>

                    </div>
                
                    <div flex="" layout="row" layout-align="center center" class="layout-align-center-center layout-row flex">

                    <button class="button-confirm md-button md-primoExplore-theme md-ink-ripple" type="submit" translate="Submit Report">
                        <span>Submit Report</span>
                    </button>
                
                    </div>
                
                </form>          

                </div>
                
            </div>
            
            </div>

            <div class="resp-loader" ng-if="showRespLoader" style="width: 200px;margin-top: -58px;margin-bottom: -2px;">
            <div class="graphic">
                <div class="loader">
                <div class="diamond"></div>
                <div class="diamond"></div>
                <div class="diamond"></div>
                </div>
            </div>
            </div>

        </div>

        <div ng-if="showSuccess">                

            <div layout="row" layout-align="center center" class="bar large-bar layout-fill layout-padding layout-align-center-center layout-row success-bar" layout-padding="" ng-class="success-bar">

            <span>{{successMessage}}</span>

            </div>

        </div>

        <div ng-if="showError">                

            <div layout="row" layout-align="center center" class="bar large-bar layout-fill layout-padding layout-align-center-center layout-row error-bar" layout-padding="" ng-class="error-bar">

            <span>{{errorMessage}}</span>

            </div>

        </div>
    `;

	var initReportBrokenLinkForm = function ($scope, parentCtrl, brokenLinkReportOptions) {
		let rootScope = $scope.$root;
		let uSMS = rootScope.$$childHead.$ctrl.userSessionManagerService;
		let jwtData = uSMS.jwtUtilService.getDecodedToken();

        var service = parentCtrl.fullViewService;
        if ($scope.isDebug) {
            //permalink
            console.log(service.$location.$$absUrl);
        }

        //no permalink == no form
        if (service.$location.$$absUrl == undefined) return;

        //md-select options
        $scope.problems = [
            {
                id: 1,
                name: "The website doesn't load or times out (blank page)",
            },
            { id: 2, name: "I received a 404 - Page not found error" },
            {
                id: 3,
                name: "The website prompted me to pay to access the article (no full text)",
            },
            {
                id: 4,
                name: "The link went to a website not related to the selected article",
            },
            {
                id: 5,
                name: "Something else went wrong, I am explaining in the comments below",
            },
        ];

        //model
        $scope.brokenlink = {
            permalink: service.$location.$$absUrl,
            selectedproblem: null,
            comment: null,
        };

        //show
        $scope.boxTitleReportBrokenLink =
            brokenLinkReportOptions.boxTitleReportBrokenLink;
        $scope.boxTitleNoteReportBrokenLink =
            brokenLinkReportOptions.boxTitleNoteReportBrokenLink;
        $scope.showService = true;
	};

	var submitReportBrokenLinkForm = function (
		$scope,
		brokenLinkReportService,
		brokenLinkReportOptions,
		report
	) {
		$scope.showRespLoader = true;
		if ($scope.isDebug) console.log(report);

		let rootScope = $scope.$root;
		let uSMS = rootScope.$$childHead.$ctrl.userSessionManagerService;
		let jwtData = uSMS.jwtUtilService.getDecodedToken();

		brokenLinkReportService
			.submitBrokenLinkReport(
				brokenLinkReportOptions.submitBrokenLinkReportUrl,
				jwtData.userName,
				jwtData.authenticationSystem,
				report
			)
			.then(
				function (response) {
					//valid response, but may have database errors (issued by remote)
					$scope.showRespLoader = false;

					if (response.errorsExist) {
						//potentail database errors
						if ($scope.isDebug) console.log(response.errorList);

						$scope.errorMessage =
							"Error submitting broken link report: " +
							response.errorList;
						$scope.showService = false;
						$scope.showSuccess = false;
						$scope.showError = true;
						return false;
					} else {
						//no database errors
						if ($scope.isDebug) console.log(response);

						$scope.successMessage =
							"Broken link report submitted successfully.";
						$scope.showService = false;
						$scope.showError = false;
						$scope.showSuccess = true;
						return true;
					}
				},
				function (response) {
					//invalid response
					$scope.showRespLoader = false;

					$scope.errorMessage =
						"Error submitting broken link report.";
					$scope.showService = false;
					$scope.showSuccess = false;
					$scope.showError = true;
					return false;
				}
			);
	};

	app.component("prmAlmaViewitAfter", {
		bindings: { parentCtrl: "<" },
		controller: function controller(
			$scope,
			$element,
			$q,
			$http,
			brokenLinkReportService,
			brokenLinkReportOptions
		) {
			$scope.showService = false;
			$scope.showRespLoader = false;
			$scope.isDebug = brokenLinkReportOptions.isDebug;			
			var parent = $scope.$parent.$ctrl.parentCtrl;
			if ($scope.isDebug) console.log(parent);
	

			var isJournal = function isJournal() {
				var format = parent.item.pnx.addata.format[0];
				return !(format.toLowerCase().indexOf("journal") == -1);
			};

			var isEbook = function isEbook() {
				var format = parent.item.pnx.addata.format[0];
				return !(format.toLowerCase().indexOf("book") == -1);
			};
		
			if (!isJournal() && !isEbook()) {
				if ($scope.isDebug)
					console.log("Neither electronic journal/article nor ebook");
				return;
			}

			this.$onInit = function () {
				initReportBrokenLinkForm($scope, parent, brokenLinkReportOptions);
			};
			$scope.submit = function (request) {
				submitReportBrokenLinkForm(
					$scope,
					brokenLinkReportService,
					brokenLinkReportOptions,
					request
				);
			};
		},
		template: tmplReportBrokenLinkForm,
	});

	app.factory("brokenLinkReportService", [
		"$http",
		function ($http) {
			return {
				submitBrokenLinkReport: function (
					url,
					user,
					authtype,
					report = null
				) {
					return $http({
						method: "POST",
						url: url,
						params: {
							primaryId: user,
							authtype: authtype ? authtype : "Alma",
							report: report,
						},
						cache: false,
					});
				},
			};
		},
	]);

	app.constant("brokenLinkReportOptions", {		
		isDebug: false,	
		boxTitleReportBrokenLink: "Report Broken Link",
		boxTitleNoteReportBrokenLink:
			"Reporting broken links will help us improve this service.",
		submitBrokenLinkReportUrl:
			"https://your.domain.edu/api-endpoint",
	});
})();
