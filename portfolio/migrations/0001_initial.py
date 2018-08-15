# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-08-14 20:51
from __future__ import unicode_literals

from django.db import migrations, models
import pyuploadcare.dj.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cover_photo', pyuploadcare.dj.models.ImageField()),
                ('name', models.CharField(max_length=300)),
                ('description', models.CharField(max_length=500)),
                ('role', models.CharField(max_length=300)),
                ('live_link', models.CharField(max_length=500)),
            ],
        ),
    ]