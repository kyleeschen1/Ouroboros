(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer [run-tests]]
            [cljs-test-display.core] [ob.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote ob.core-test))