#!/bin/bash
cd /home/kavia/workspace/code-generation/unified-cloud-resource-manager-185822-185861/UnifiedCloudResourceManagerApp
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

